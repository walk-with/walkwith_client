import {StyleSheet} from 'react-native';

const signup = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  inputBox: {
    width: '75%',
    marginBottom: '7%',
  },
  input: {
    width: '100%',
    fontSize: 18,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 50,
  },
  submit: {
    paddingVertical: 10,
    width: 100,
  },
});

export {signup};
