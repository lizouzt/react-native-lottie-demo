/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Animation from 'lottie-react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class rnAnimateTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount () {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animation style={{
          width: 200,
          height: 200
        }}
        source={require("./animations/LineAnimation.json")}>
        </Animation>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnAnimateTest', () => rnAnimateTest);
