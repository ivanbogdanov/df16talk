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

import routes from '../../routes';

import styles from './styles';

class SwipePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayNextButton: false,
      openPanelIndex: 0
    };
  }

  _getNextRoute(routeName) {
    let index = routes.findIndex(route => route.name === routeName);
    let nextIndex = index+1;
    if(nextIndex >= routes.length){
      nextIndex = 0;
    }
    return routes[nextIndex];
  }

  _getNextRouteLabel() {
    let nextRoute = this._getNextRoute(this.props.route.name);
    return nextRoute.preview?nextRoute.preview:nextRoute.label;
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
    let nextLabel = this._getNextRouteLabel();
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
        <NextChapterButton
          label={nextLabel}
          show={this.state.displayNextButton}
          onPress={this._handlePress.bind(this)}/>
      </View>
    );
  }
}

export default SwipePage
