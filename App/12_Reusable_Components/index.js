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
    this.props.navigator.push({name:'Some_Native_Apps_Are_Great'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Reusable Components
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            name='puzzle'
            iconColor='#ffffff'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
