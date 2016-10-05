import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';

import MainMenu from './MainMenu';

import Why_React_Native from './1_Why_React_Native';
import Mobile_Is_Expensive from './2_Mobile_Is_Expensive';
import Almost_Done from './3_Almost_Done';
import Some_Native_Apps_Are_Great from './4_Some_Native_Apps_Are_Great';
import Most_Native_Apps_Suck from './5_Most_Native_Apps_Suck';
import Productivity_And_Performance from './6_Productivity_And_Performance';
import Almost_Done_Again from './7_Almost_Done_Again';
import Not_Another_Hybrid from './8_Not_Another_Hybrid';
import Declarative_Components from './9_Declarative_Components';
import Efficient_Rerender from './10_Efficient_Rerender';
import Native_Views from './11_Native_Views';
import Reusable_Components from './12_Reusable_Components';

import navbarMapper from './navbarMapper';

import styles from './styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  _handleMenuPress(routeName) {
    this.setState({isOpen:false});
    this.refs.nav.replace({name:routeName})
  }

  _handleMenuOpen() {
    this.setState({isOpen:true});
  }

  _renderScene(route, navigator)  {
    switch (route.name) {
      case 'Mobile_Is_Expensive':
        return <Mobile_Is_Expensive navigator={navigator}/>
      case 'Almost_Done':
        return <Almost_Done navigator={navigator}/>
      case 'Some_Native_Apps_Are_Great':
        return <Some_Native_Apps_Are_Great navigator={navigator}/>
      case 'Most_Native_Apps_Suck':
        return <Most_Native_Apps_Suck navigator={navigator}/>
      case 'Productivity_And_Performance':
        return <Productivity_And_Performance navigator={navigator}/>
      case 'Almost_Done_Again':
        return <Almost_Done_Again navigator={navigator}/>
      case 'Not_Another_Hybrid':
        return <Not_Another_Hybrid navigator={navigator}/>
      case 'Declarative_Components':
        return <Declarative_Components navigator={navigator}/>
      case 'Efficient_Rerender':
        return <Efficient_Rerender navigator={navigator}/>
      case 'Native_Views':
        return <Native_Views navigator={navigator}/>
      case 'Reusable_Components':
        return <Reusable_Components navigator={navigator}/>
      default:
        return <Why_React_Native navigator={navigator}/>
    }
  }

  render() {
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this._handleMenuPress.bind(this)} />}>
        <Navigator
          ref='nav'
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={this._renderScene}
          navigationBar={<Navigator.NavigationBar routeMapper={navbarMapper({onMenuOpen:this._handleMenuOpen.bind(this)})} style={styles.navbar}/>}
        />
      </SideMenu>
    );
  }
}

export default App
