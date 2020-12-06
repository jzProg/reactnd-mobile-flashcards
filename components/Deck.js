import { View, Text } from "react-native";

function Deck({ title, cards }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          {title}
        </Text>
        <Text>
          contains {cards} cards
        </Text>
      </View>
    )
}

export default Deck;
