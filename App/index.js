import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';

import MainMenu from './MainMenu';

import Why_React_Native from './01_Why_React_Native';
import Some_Native_Apps_Are_Great from './02_Some_Native_Apps_Are_Great';
import Most_Native_Apps_Suck from './03_Most_Native_Apps_Suck';
import Mobile_Is_Expensive from './04_Mobile_Is_Expensive';
import Productivity_And_Performance from './05_Productivity_And_Performance';
import Not_Another_Hybrid from './06_Not_Another_Hybrid';
import Declarative_Components from './07_Declarative_Components';
import Efficient_Rerender from './08_Efficient_Rerender';
import Native_Views from './09_Native_Views';
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
      case 'Some_Native_Apps_Are_Great':
        return <Some_Native_Apps_Are_Great route={route} onNext={this._handleNext.bind(this)}/>
      case 'Most_Native_Apps_Suck':
        return <Most_Native_Apps_Suck route={route} onNext={this._handleNext.bind(this)}/>
      case 'Mobile_Is_Expensive':
        return <Mobile_Is_Expensive route={route} onNext={this._handleNext.bind(this)} />
      case 'Productivity_And_Performance':
        return <Productivity_And_Performance route={route} onNext={this._handleNext.bind(this)}/>
      case 'Not_Another_Hybrid':
        return <Not_Another_Hybrid route={route} onNext={this._handleNext.bind(this)}/>
      case 'Efficient_Rerender':
        return <Efficient_Rerender route={route} onNext={this._handleNext.bind(this)}/>
      case 'Native_Views':
        return <Native_Views route={route} onNext={this._handleNext.bind(this)}/>
      case 'Declarative_Components':
        return <Declarative_Components route={route} onNext={this._handleNext.bind(this)}/>
      case 'Reusable_Components':
        return <Reusable_Components route={route} onNext={this._handleNext.bind(this)}/>
      case 'MobileSDK':
        return <MobileSDK route={route} onNext={this._handleNext.bind(this)}/>
      default:
        return <Why_React_Native route={route} onNext={this._handleNext.bind(this)}/>
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
