import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './constants';

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => {
       if (decks) return JSON.parse(decks);
       else {
         const obj = {};
         AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(obj));
         return obj;
       }
    });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => JSON.parse(decks)[id]);
}

export function saveDeckTitle(deckTitle) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deckTitle]: { title: deckTitle, questions: [] }
  }))
}

export function addCardToDeck(deckTitle, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => {
      let deckObj = JSON.parse(decks);
      deckObj = { ...deckObj,
                 [deckTitle]: {
                   ...deckObj[deckTitle],
                   questions: [
                     ...deckObj[deckTitle].questions,
                     card
                   ]
                 }
      }
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(deckObj));
    })
}
