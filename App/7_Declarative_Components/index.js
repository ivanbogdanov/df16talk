import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import Theme from 'react.force.base.theme';

import codeSample from './codeSample';

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

  _renderSampleCode () {
    return codeSample.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
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
          Declarative Components
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Utility
            name='insert_tag_field'
            iconColor='#ffffff'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.codeText}>
          React: Simple component
        </Text>
        <View style={styles.codeContainer}>
          { this._renderSampleCode() }
        </View>
      </View>
    </Swiper>
    );
  }
}

export default Slide
