import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Why_React_Native from './1_Why_React_Native';
import Mobile_Is_Expensive from './2_Mobile_Is_Expensive';
import Almost_Done from './3_Almost_Done';
import Some_Native_Apps_Are_Great from './4_Some_Native_Apps_Are_Great';
import Most_Native_Apps_Suck from './5_Most_Native_Apps_Suck';
import Productivity_And_Performance from './6_Productivity_And_Performance';
import Almost_Done_Again from './7_Almost_Done_Again';
import Not_Another_Hybrid from './8_Not_Another_Hybrid';


import styles from './styles';

class App extends Component {

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
      default:
        return <Why_React_Native navigator={navigator}/>
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={this._renderScene}
      />
    );
  }
}

export default App
