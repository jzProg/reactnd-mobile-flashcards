import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        name="DeckListView"
        component={DeckListView}
        options={{ tabBarLabel: 'Deck List' }}
      />
      <HomeStack.Screen
        name="DeckView"
        component={DeckView}
        options={{ tabBarLabel: 'Deck' }}
      />
      <HomeStack.Screen
        name="NewQuestion"
        component={NewQuestion}
        options={{ tabBarLabel: 'New Question' }}
      />
      <HomeStack.Screen
        name="Quiz"
        component={Quiz}
        options={{ tabBarLabel: 'Quiz' }}
      />
      <HomeStack.Screen
        name="Score"
        component={Score}
        options={{ tabBarLabel: 'Result' }}
      />
    </HomeStack.Navigator>
  );
}

export default class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Decks" component={HomeStackScreen} />
           <Tab.Screen name="Add New Deck" component={NewDeck}/>
         </Tab.Navigator>
       </NavigationContainer>
    );
  }
}
