import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Theme from 'react.force.base.theme';

import { SwipePage } from '../Common';

import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Efficient Rendering
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='replace'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Virtual DOM
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            DOM Diffs
          </Text>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
