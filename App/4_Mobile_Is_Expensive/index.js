import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SlideInFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  _onMomentumScrollEnd (e, state, context) {
    this.setState({openPanelIndex:context.state.index});
  }

  _handlePress() {
    this.props.navigator.push({name:'Productivity_And_Performance'});
  }

  render() {
    return (
      <Swiper
        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{ bottom: 80 }}
        loop={true}
        onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
        >
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
          <SlideInFadeIn>
            <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.iconContainer}>
              <Theme.Icons.Utility
                iconColor='#ffffff'
                name='moneybag'
              />
            </TouchableOpacity>
          </SlideInFadeIn>
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
      </Swiper>
    );
  }
}

export default Slide
