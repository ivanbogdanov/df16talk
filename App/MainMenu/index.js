import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import MenuItem from './MenuItem';

import styles from './styles';

import routes from '../routes';

class MainMenu extends Component {

  _handleMenuItemPress(name,next) {
    if(this.props.onMenuPress){
      this.props.onMenuPress(name,next);
    }
  }

  _renderMenuItems() {
    return routes.map((item,index) => {
        return (
          <MenuItem
            key={'menuItem_'+index}
            onPress={this._handleMenuItemPress.bind(this)}
            name={item.name}
            label={item.label}
            next={item.next} />
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
