import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../../Animations';
import NextChapterButton from '../NextChapterButton';

import styles from './styles';

class SwipePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayNextButton: false,
      openPanelIndex: 0
    };
  }

  _handlePress() {
    if(this.props.onNext){
      this.props.onNext(this.props.route);
    }
  }

  _onMomentumScrollEnd (e, state, context) {
    if(this.state.openPanelIndex > context.state.index){
      this.setState({displayNextButton:true});
    }
    this.setState({openPanelIndex:context.state.index});
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{ bottom: 80 }}
          loop={true}
          onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
          >
          { this.props.children }
        </Swiper>
        <NextChapterButton show={this.state.displayNextButton} onPress={this._handlePress.bind(this)}/>
      </View>
    );
  }
}

export default SwipePage
