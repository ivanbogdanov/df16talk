import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import Theme from 'react.force.base.theme';

import styles from './styles';

import reactSampleCode from './reactSampleCode';


class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  _handlePress() {
    this.props.navigator.push({name:'Not_Another_Hybrid'});
  }

  _onMomentumScrollEnd (e, state, context) {
    this.setState({openPanelIndex:context.state.index});
  }

  _renderSampleCode () {
    return reactSampleCode.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
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
        <View style={styles.titleCont}>
          <Text style={styles.title}>
            React Native
          </Text>
        </View>
        <Text style={styles.text}>
          Productivity
        </Text>
        <Text style={styles.textAnd}>
          &
        </Text>
        <Text style={styles.text}>
          Performance
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Custom
            name="custom80"
            style={styles.icon}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
        <Text style={styles.codeText}>React: fetch sample code</Text>
        <View style={styles.codeContainer}>
          { this._renderSampleCode() }
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>iOS</Text>
        <Text style={styles.text}>Android</Text>
      </View>
    </Swiper>
    );
  }
}

export default Slide
