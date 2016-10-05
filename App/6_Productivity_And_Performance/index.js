import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';

class App extends Component {

  _handlePress() {
    this.props.navigator.push({name:'Almost_Done_Again'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          React Native:
        </Text>
        <Text style={styles.text}>
          Productivity
        </Text>
        <Text style={styles.text}>
          Performance
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Custom
            name="custom80"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default App
