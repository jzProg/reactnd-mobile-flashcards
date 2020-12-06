import * as React from "react";
import { View, Text } from "react-native";
import NewDeck from './components/NewDeck';
import DeckList from './components/DeckListView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Decks" component={DeckList} />
           <Tab.Screen name="Add New Deck" component={NewDeck} />
         </Tab.Navigator>
       </NavigationContainer>
    );
  }
}
