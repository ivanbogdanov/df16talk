import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import Theme from 'react.force.base.theme';

import swiftSampleCode from './swiftSampleCode';

import styles from './styles';

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  _handlePress() {
    this.props.navigator.push({name:'Mobile_Is_Expensive'});
  }

  _onMomentumScrollEnd (e, state, context) {
    this.setState({openPanelIndex:context.state.index});
  }

  _renderSwiftCode () {
    return swiftSampleCode.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
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
          ...but
        </Text>
        <Text style={styles.text}>
          many Native Apps
        </Text>
        <Text style={styles.text}>
          are ...
        </Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.iconContainer}>
          <Theme.Icons.Utility
            iconColor='#ffffff'
            name="like"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Why?</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Native is hard</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.codeText}>Swift: fetch sample code</Text>
        <View style={styles.codeContainer}>
          { this._renderSwiftCode() }
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Many devs</Text>
        <Text style={styles.text}>are affraid of</Text>
        <Text style={styles.text}>mistakes</Text>
        <Text style={styles.text}>and</Text>
        <Text style={styles.text}>make</Text>
        <Text style={styles.text}>boring apps</Text>
      </View>
    </Swiper>
    );
  }
}

export default Slide
