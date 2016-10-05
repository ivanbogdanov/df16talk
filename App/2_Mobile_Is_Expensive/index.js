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
    this.props.navigator.push({name:'Almost_Done'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Text style={styles.text}>
            Mobile is Expensive
          </Text>
        </TouchableOpacity>
        <Theme.Icons.Utility
          iconColor='#ffffff'
          name='moneybag'
        />
      </View>
    );
  }
}

export default App
