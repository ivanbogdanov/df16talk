import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { SlideRightFadeIn,SlideUpFadeIn } from '../Animations';

import { NextChapterButton } from '../Common';

import styles from './styles';

class Slide extends Component {

  _handlePress() {
    console.log('NEXT!: ',this.props.route)
    if(this.props.onNext){
      console.log('NEXT!: ',this.props.route)

      this.props.onNext(this.props.route);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NextChapterButton onPress={this._handlePress.bind(this)} />
        <SlideUpFadeIn delay={1000} style={styles.infoContainer}>
          <TouchableOpacity onPress={this._handlePress.bind(this)}>
            <Text style={styles.welcome}>
              Why React Native?
            </Text>
          </TouchableOpacity>
        </SlideUpFadeIn>
      </View>
    );
  }
}

export default Slide
