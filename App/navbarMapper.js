import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';

module.exports = (config) => ({

  LeftButton: (route, navigator, index, navState) => {
    return  (
      <TouchableOpacity onPress={config.onMenuOpen}>
        <Theme.Icons.Utility
          name="rows"
          style={styles.menuNavIcon}
          iconColor='#ffffff' />
      </TouchableOpacity>
    )
  },
  RightButton (route, navigator, index, navState) {
    return null;
  },
  Title (route, navigator, index, navState) {
    return null;
  }

});
