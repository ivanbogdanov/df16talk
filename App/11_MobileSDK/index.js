import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SwipePage } from '../Common';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} >

        <View style={styles.container}>
          <Text style={styles.text}>
            React Native
          </Text>
          <Text style={styles.text}>
            with
          </Text>
          <Text style={styles.text}>
            Mobile SDK
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='salesforce1'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            oauth
          </Text>
          <Text style={styles.text}>
            net
          </Text>
          <Text style={styles.text}>
            smartstore
          </Text>
          <Text style={styles.text}>
            smartsync
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            forceios
          </Text>
          <Text style={styles.text}>
            forcedroid
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            datacontainer
          </Text>
          <Text style={styles.text}>
            theme
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Dreamhouse
          </Text>
          <Text style={styles.text}>
            App
          </Text>
        </View>

      </SwipePage>
    );
  }
}

export default Slide
