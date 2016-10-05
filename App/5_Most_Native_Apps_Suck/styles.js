import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9faab5',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  icon:{
    width:80,
    height:80,
    transform:[{rotate: '180deg'}]
  }
});

export default styles;
