import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import { NOTIFICATION_STORAGE_KEY } from './constants';

function createNotification() {
  return {
    content: {
      title: 'Quiz Reminder!',
      body: "Don't forget to play quiz today!",
    },
    trigger: {
      weekday: new Date().getDay() + 2, // tomorrow
      hour: 17,
      minute: 0,
    }
  }
}

Notifications.addNotificationReceivedListener(notification => {
  Notifications.scheduleNotificationAsync(createNotification());
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export function clearTodayNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
                     .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function scheduleNextNotification() {
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
      .then(JSON.parse)
      .then(data => {
        if (!data) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync();
                Notifications.scheduleNotificationAsync(createNotification());
                AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true));
              }
            });
        }
    });
}
