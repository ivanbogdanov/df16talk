import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';


class MainMenu extends Component {

  _handlePress() {
    if(this.props.onPress){
        this.props.onPress(this.props.name);
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._handlePress.bind(this)}>
        <Text style={styles.text}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default MainMenu
