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

const makeExample = (name, getJson) => ({ name, getJson });
const EXAMPLES = [
  makeExample('Hamburger Arrow', () => require('./animations/HamburgerArrow.json')),
  makeExample('Line Animation', () => require('./animations/LineAnimation.json')),
  makeExample('Lottie Logo 1', () => require('./animations/LottieLogo1.json')),
  makeExample('Lottie Logo 2', () => require('./animations/LottieLogo2.json')),
  makeExample('Lottie Walkthrough', () => require('./animations/LottieWalkthrough.json')),
  makeExample('Pin Jump', () => require('./animations/PinJump.json')),
  makeExample('Twitter Heart', () => require('./animations/TwitterHeart.json')),
  makeExample('Watermelon', () => require('./animations/Watermelon.json')),
  makeExample('Motion Corpse', () => require('./animations/MotionCorpse-Jrcanest.json')),
].reduce((acc, e) => {
  // eslint-disable-next-line no-param-reassign
  acc[e.name] = e;
  return acc;
}, {});

export default class rnAnimateTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      config: {
        duration: 3000,
        imperative: false,
      },
    };
  }

  runAnimate () {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: this.state.config.duration
    }).start();
  }

  componentDidMount () {
    this.runAnimate.bind(this)();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animation style={{
            width: 100,
            height: 100
          }}
          source={EXAMPLES['Hamburger Arrow'].getJson()}
          progress={this.state.progress}
          onclick={() => {this.setState({progress: new Animated.Value(0)}); this.runAnimate.bind(this)()}}
        />
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
