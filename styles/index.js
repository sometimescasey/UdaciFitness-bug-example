import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
  	height: 40,
    backgroundColor:'#AA00AA',
    width: '70%',
    display: 'flex',
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  btnWrapper: {
  	display: 'flex',
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#e53224',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  btnText: {
    color: '#fff',
  },
  urlText: {
    fontSize: 30,
  },
  imgWrapper: {
    margin: 10,
  },
  img: {
    width: 700*0.3,
    height: 432*0.3,
    margin: 30,
  },
  input: {
    margin: 20,
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '70%',
  },
  inputPlaceholder: {
    margin: 20,
    height: 40,
  },
});