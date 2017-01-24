import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { SwipePage } from '../Common';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>

        <View style={styles.container}>
          <Text style={styles.text}>
            React Native
          </Text>
          <Text style={styles.text}>
            Mobile SDK
          </Text>
          <Text style={styles.text}>
            Challenges
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='trail'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Frequent RN Updates
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Bridge... Bridge...
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Caching
          </Text>
          <Text style={styles.text}>
            Offline with encrypted database
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Mix native and react-native functionality
          </Text>
          <Text style={styles.text}>
            Navigation!
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            ListView memory usage
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            CI / Integration tests
          </Text>
        </View>


      </SwipePage>
    );
  }
}

export default Slide
