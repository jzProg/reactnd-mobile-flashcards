function Deck({ title, cards }) {
  return (
      <View>
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
