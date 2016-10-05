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
    this.props.navigator.push({name:this.props.next});
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
          Reusable Components
        </Text>
        <SlideInFadeIn>
          <TouchableOpacity
            style={styles.iconCont}
            onPress={this._handlePress.bind(this)}>
            <Theme.Icons.Utility
              name='puzzle'
              iconColor='#ffffff'
              style={styles.icon}
            />
          </TouchableOpacity>          
        </SlideInFadeIn>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Clean codebase
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Cross-platform components
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Cross-project components
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          NPM
        </Text>
        <Text style={styles.text}>
          distribution
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Open-source community
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Easy to test
        </Text>
      </View>

    </Swiper>
    );
  }
}

export default Slide
