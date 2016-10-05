import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';

class Slide extends Component {

  _handlePress() {
    this.props.navigator.push({name:'Not_Another_Hybrid'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            iconColor='#ffffff'
            name="logout"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
