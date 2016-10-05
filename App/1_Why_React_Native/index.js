import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

class Slide extends Component {

  _handlePress() {
    this.props.navigator.push({name:this.props.next});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Text style={styles.welcome}>
            Why React Native?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
