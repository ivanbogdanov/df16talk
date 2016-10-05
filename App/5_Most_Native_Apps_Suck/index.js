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
    this.props.navigator.push({name:'Productivity_And_Performance'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Most Native Apps Suck
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

export default Slide
