import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import Theme from 'react.force.base.theme';

import styles from './styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 0};
  }

  _onMomentumScrollEnd (e, state, context) {
    this.setState({openPanelIndex:context.state.index});
  }

  _handlePress() {
    this.props.navigator.push({name:'Declarative_Components'});
  }

  render() {
    return (
      <Swiper
        dot={<View style={{backgroundColor:'rgba(100,100,100,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
        activeDot={<View style={{backgroundColor: '#777', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{ bottom: 80 }}
        loop={true}
        onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
        >
      <View style={styles.container}>
        <Text style={styles.text}>
          React Native
        </Text>
        <Text style={styles.text}>
          Is Not Another
        </Text>
        <Text style={styles.text}>
          Hybrid
        </Text>
        <Text style={styles.text}>
          Framework
        </Text>
        <TouchableOpacity
          style={styles.iconCont}
          onPress={this._handlePress.bind(this)}>
          <Theme.Icons.Custom
            name="custom34"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          No WebView
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Javascript Thread
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Multiple Native Threads
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Async rendering
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Native Views
        </Text>
      </View>
    </Swiper>
    );
  }
}

export default App
