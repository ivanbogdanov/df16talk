import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SwipePage } from '../Common';


import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} >
      <View style={styles.container}>
          <Text style={styles.text}>
            Mobile
          </Text>
          <Text style={styles.text}>
            development
          </Text>
          <Text style={styles.text}>
            is expensive
          </Text>
          <SlideUpFadeIn>
            <TouchableOpacity style={styles.iconContainer}>
              <Theme.Icons.Utility
                iconColor='#ffffff'
                name='moneybag'
              />
            </TouchableOpacity>
          </SlideUpFadeIn>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          iOS
        </Text>
        <Text style={styles.text}>
          Android
        </Text>
        <Text style={styles.text}>
          Web
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          separate codebases
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          dedicated teams
        </Text>
      </View>
      </SwipePage>
    );
  }
}

export default Slide
