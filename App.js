import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scheduleNextNotification } from './utils/notifications';
import { getDecks } from './utils/storage';
import { styles } from './utils/styles';
import { Ionicons } from '@expo/vector-icons';
import NewDeck from './components/NewDeck';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import Score from './components/Score';
import NewQuestion from './components/NewQuestion';
import Quiz from './components/Quiz';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Deck List"
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        component={DeckListView}/>
      <HomeStack.Screen
        name="Deck"
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        component={DeckView}/>
      <HomeStack.Screen
        name="New Question"
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        component={NewQuestion}/>
      <HomeStack.Screen
        name="Quiz"
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        component={Quiz}/>
      <HomeStack.Screen
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        name="Score"
        component={Score}/>
    </HomeStack.Navigator>
  );
}

function NewDeckScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="New Deck"
        options={{ headerStyle: { backgroundColor: 'black'}, headerTitleStyle: { color: 'white' }}}
        component={NewDeck}/>
    </HomeStack.Navigator>
  );
}

export default class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                 let iconName;
                 if (route.name === 'Decks') iconName = 'ios-folder-open';
                 else if (route.name === 'Add New Deck') iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                 return <Ionicons name={iconName} size={size} color={color} />;
              },
           })}
           tabBarOptions={{
             style: styles.tab,
             activeTintColor: 'white',
             inactiveTintColor: 'gray',
           }}>
           <Tab.Screen name="Decks" component={HomeStackScreen}/>
           <Tab.Screen name="Add New Deck" component={NewDeckScreen}/>
         </Tab.Navigator>
       </NavigationContainer>
    );
  }
}
