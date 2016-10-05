import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import Swiper from 'react-native-swiper';

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
    this.props.navigator.push({name:'Reusable_Components'});
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
          Native Views
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            name='touch_action'
            iconColor='#ffffff'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Native
        </Text>
        <Text style={styles.text}>
          Touch Events
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Native
        </Text>
        <Text style={styles.text}>
          Lists, Scrollers
        </Text>
      </View>
    </Swiper>
    );
  }
}

export default Slide
