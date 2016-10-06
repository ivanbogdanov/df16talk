import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SlideUpFadeIn } from '../Animations';
import { NextChapterButton } from '../Common';

import styles from './styles';

class Slide extends Component {

  _handlePress() {
    if(this.props.onNext){
      this.props.onNext(this.props.route);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NextChapterButton label={this.props.nextLabel} delay={1200} onPress={this._handlePress.bind(this)} />
        <SlideUpFadeIn delay={500} style={styles.infoContainer}>
          <Text style={styles.welcome}>
            Why React Native?
          </Text>
        </SlideUpFadeIn>
      </View>
    );
  }
}

export default Slide
