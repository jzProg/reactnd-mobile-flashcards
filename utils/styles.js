import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'black',
    padding: 5
  },
  italic: {
    fontStyle: 'italic'
  },
  title: {
     fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray'
  },
  correctButton: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'green',
    padding: 10,
    width: 200,
    marginTop: 40
  },
  incorrectButton: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'red',
    padding: 10,
    width: 200,
    marginTop: 4
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 2,
    marginTop: 4
  },
  errorText: {
    color: 'red'
  }
});

export { styles };
