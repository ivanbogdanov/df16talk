import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';

import MainMenu from './MainMenu';

import Why_React_Native from './1_Why_React_Native';
import Some_Native_Apps_Are_Great from './2_Some_Native_Apps_Are_Great';
import Most_Native_Apps_Suck from './3_Most_Native_Apps_Suck';
import Mobile_Is_Expensive from './4_Mobile_Is_Expensive';
import Productivity_And_Performance from './5_Productivity_And_Performance';
import Not_Another_Hybrid from './6_Not_Another_Hybrid';
import Declarative_Components from './7_Declarative_Components';
import Efficient_Rerender from './8_Efficient_Rerender';
import Native_Views from './9_Native_Views';
import Reusable_Components from './10_Reusable_Components';
import MobileSDK from './11_MobileSDK';

import navbarMapper from './navbarMapper';

import routes from './routes';

import styles from './styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  _handleMenuPress(routeName, nextRouteName) {
    this.setState({isOpen:false});
    this.refs.nav.push({name:routeName, next:nextRouteName})
  }

  _handleNext(route) {
    this.setState({isOpen:false});
    this.refs.nav.push({name:route.next})
  }

  _handleMenuOpen() {
    this.setState({isOpen:true});
  }

  _renderScene(route, navigator)  {
    switch (route.name) {
      case 'Mobile_Is_Expensive':
        return <Mobile_Is_Expensive navigator={navigator} next='Some_Native_Apps_Are_Great' />
      case 'Some_Native_Apps_Are_Great':
        return <Some_Native_Apps_Are_Great navigator={navigator} next='Most_Native_Apps_Suck'/>
      case 'Most_Native_Apps_Suck':
        return <Most_Native_Apps_Suck navigator={navigator} next='Productivity_And_Performance'/>
      case 'Productivity_And_Performance':
        return <Productivity_And_Performance navigator={navigator} next='Not_Another_Hybrid'/>
      case 'Not_Another_Hybrid':
        return <Not_Another_Hybrid navigator={navigator} next='Declarative_Components'/>
      case 'Declarative_Components':
        return <Declarative_Components navigator={navigator} next='Efficient_Rerender'/>
      case 'Efficient_Rerender':
        return <Efficient_Rerender navigator={navigator} next='Native_Views'/>
      case 'Native_Views':
        return <Native_Views navigator={navigator} next='Reusable_Components'/>
      case 'Reusable_Components':
        return <Reusable_Components navigator={navigator} next='MobileSDK'/>
      case 'MobileSDK':
        return <MobileSDK navigator={navigator} next='Why_React_Native'/>
      default:
        return <Why_React_Native navigator={navigator} next='Some_Native_Apps_Are_Great'/>
    }
  }

  render() {
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this._handleMenuPress.bind(this)} />}>
        <Navigator
          ref='nav'
          initialRoute={{name:'Why_React_Native'}}
          renderScene={this._renderScene}
          navigationBar={<Navigator.NavigationBar routeMapper={navbarMapper({onMenuOpen:this._handleMenuOpen.bind(this),onNext:this._handleNext.bind(this)})} style={styles.navbar}/>}
        />
      </SideMenu>
    );
  }
}

export default App
