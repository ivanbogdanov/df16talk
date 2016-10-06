import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#faffbd',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#54698d',
    margin:2,
    marginRight:10
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SalesforceSans-Regular',
    color:'black',
    backgroundColor:'transparent',
    marginRight:10
  },
  menuNavIcon: {
    width:20,
    height:20
  }
});

export default styles;
