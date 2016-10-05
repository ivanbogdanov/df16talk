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
    this.props.navigator.push({name:'Most_Native_Apps_Suck'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Some Native Apps are really GREAT!
        </Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            iconColor='#ffffff'
            name="like"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default App
