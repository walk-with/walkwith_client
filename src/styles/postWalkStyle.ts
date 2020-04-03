import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 20,
  },
  text: {
    fontSize: 20,
    width: width * 0.9,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 20,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  titleInput: {
    fontSize: 20,
    padding: 5,
    margin: 20,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    width: width * 0.9,
  },
  descriptInput: {
    fontSize: 20,
    padding: 5,
    margin: 20,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    width: width * 0.9,
  },
  mapInput: {
    fontSize: 20,
    padding: 5,
    marginBottom: 5,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    width: width * 0.9,
  },
  mapAreaWrap: {
    fontSize: 20,
    height: 420,
    backgroundColor: '#fff',
    width: width * 0.9,
  },
  mapArea: {
    height: 320,
    backgroundColor: '#ddd',
    width: width * 0.9,
  },
  walkDate: {
    width: width * 0.9,
    fontSize: 20,
  },
  walkTimeWrap: {
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    margin: 5,
  },
  walkTime: {
    fontSize: 20,
    paddingTop: 6,
  },
  walkTag: {
    width: width * 0.9,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  walkTagBtnWrap: {
    borderRadius: 10,
  },

  walkTagBtn: {
    width: 80,
    height: 40,
    borderRadius: 10,
  },
  walkPet: {
    marginTop: 30,
    width: width * 0.9,
    height: 50,
  },
  walkSubmit: {
    width: width * 0.9,
    marginBottom: 20,
  },
});
