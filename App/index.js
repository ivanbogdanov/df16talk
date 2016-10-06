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

import { NavigationBarMapper } from './NavBar';

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

  _getNextRoute(routeName) {
    let index = routes.findIndex(route => route.name === routeName);
    let nextIndex = index+1;
    if(nextIndex >= routes.length){
      nextIndex = 0;
    }
    return routes[nextIndex];
  }

  _handleNext(route) {
    console.log('_handleNext: ',route);
    this.setState({isOpen:false});
    let nextRoute = (route && route.name)?this._getNextRoute(route.name):routes[0];
    console.log('nextRoute: ',nextRoute);

    this.refs.nav.replace(nextRoute);
  }

  _handleMenuOpen() {
    this.setState({isOpen:true});
  }

  _renderScene(route, navigator)  {
    switch (route.name) {
      case 'Mobile_Is_Expensive':
        return <Mobile_Is_Expensive navigator={navigator} route={route} onNext={this._handleNext.bind(this)} />
      case 'Some_Native_Apps_Are_Great':
        return <Some_Native_Apps_Are_Great navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Most_Native_Apps_Suck':
        return <Most_Native_Apps_Suck navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Productivity_And_Performance':
        return <Productivity_And_Performance navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Not_Another_Hybrid':
        return <Not_Another_Hybrid navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Declarative_Components':
        return <Declarative_Components navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Efficient_Rerender':
        return <Efficient_Rerender navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Native_Views':
        return <Native_Views navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'Reusable_Components':
        return <Reusable_Components navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      case 'MobileSDK':
        return <MobileSDK navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
      default:
        return <Why_React_Native navigator={navigator} route={route} onNext={this._handleNext.bind(this)}/>
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
          renderScene={this._renderScene.bind(this)}
          navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarMapper({onMenuOpen:this._handleMenuOpen.bind(this),onNext:this._handleNext.bind(this),showNext:true})} style={styles.navbar}/>}
        />
      </SideMenu>
    );
  }
}

export default App
