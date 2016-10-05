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
    this.props.navigator.push({name:'Native_Views'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Efficient Rendering
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            name='replace'
            iconColor='#ffffff'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
