import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Theme from 'react.force.base.theme';

import styles from './styles';

class NextChapterButton extends Component {

  _handlePress() {
    if(this.props.onNext){
      this.props.onNext(this.props.route);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.container}>
        <Text style={styles.text}>
          Next Chapter
        </Text>
        <Theme.Icons.Utility
          name="right"
          style={styles.menuNavIcon}
        />
      </TouchableOpacity>
    );
  }
}

export default NextChapterButton
