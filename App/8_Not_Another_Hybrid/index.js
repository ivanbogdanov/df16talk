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
    this.props.navigator.push({name:'Declarative_Components'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          React Native
        </Text>
        <Text style={styles.text}>
          Is Not Another
        </Text>
        <Text style={styles.text}>
          Hybrid
        </Text>
        <Text style={styles.text}>
          Framework
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Custom
            name="custom34"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default App
