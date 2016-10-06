import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../Animations';

import swiftSampleCode from './swiftSampleCode';

import styles from './styles';

class SwipePage extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  _handlePress() {
    this.props.navigator.push({name:this.props.next});
  }

  _onMomentumScrollEnd (e, state, context) {
    this.setState({openPanelIndex:context.state.index});
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
      { this.props.children }
    </Swiper>
    );
  }
}

export default SwipePage
