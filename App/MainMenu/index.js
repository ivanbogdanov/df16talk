import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import MenuItem from './MenuItem';

import styles from './styles';

const menuItems = [
  {
    name:'Why_React_Native',
    label:'Why React Native'
  },
  {
    name:'Mobile_Is_Expensive',
    label:'Mobile Is Expensive'
  },
  {
    name:'Some_Native_Apps_Are_Great',
    label:'Some Native Apps Are Great'
  },
  {
    name:'Most_Native_Apps_Suck',
    label:'Most Native Apps Suck'
  },
  {
    name:'Productivity_And_Performance',
    label:'Productivity And Performance'
  },
  {
    name:'Not_Another_Hybrid',
    label:'Not Another Hybrid'
  },
  {
    name:'Declarative_Components',
    label:'Declarative Components'
  },
  {
    name:'Efficient_Rerender',
    label:'Efficient Rerender'
  },
  {
    name:'Native_Views',
    label:'Native Views'
  },
  {
    name:'Reusable_Components',
    label:'Reusable Components'
  }
];

class MainMenu extends Component {

  _handleMenuItemPress(name) {
    if(this.props.onMenuPress){
      this.props.onMenuPress(name);
    }
  }

  _renderMenuItems() {
    return menuItems.map((item,index) => {
        return (
          <MenuItem
            key={'menuItem_'+index}
            onPress={this._handleMenuItemPress.bind(this)}
            name={item.name}
            label={item.label} />
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        { this._renderMenuItems() }
      </View>
    );
  }
}

export default MainMenu
