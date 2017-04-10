/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Animation from 'lottie-react-native';
import Picker from './Picker';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Dimensions,
  Slider
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
  acc[e.name] = e;
  return acc;
}, {});

export default class rnAnimateTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      example: Object.keys(EXAMPLES)[0],
      progress: new Animated.Value(0),
      config: {
        duration: 3000,
        imperative: false,
      },
    };

    this.reRunAnimate = this.reRunAnimate.bind(this);
    this.setAnim = this.setAnim.bind(this);
    this.randomAnimate = this.randomAnimate.bind(this);
    this.pauseAnimate = this.pauseAnimate.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }

  runAnimate () {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: this.state.config.duration
    }).start();
  }

  reRunAnimate () {
    this.state.progress.setValue(1);
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: this.state.config.duration
    }).start(({finished}) => {
      if (finished) this.forceUpdate();
    });
  }

  componentDidMount () {
    // this.anim.play();
    this.runAnimate.bind(this)();
  }

  randomAnimate () {
    this.setState({
      example: Object.keys(EXAMPLES)[Math.floor(Math.random() * 9)]
    });
    this.reRunAnimate();
  }

  pauseAnimate () {
    this.anim.stop();
  }

  updateProgress (progress) {
    this.state.progress.setValue(progress);
  }

  setAnim (anim) {
    this.anim = anim;
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#000',
          borderBottomWidth: 1,
          marginVertical: 10,
        }}>
          <Animation 
            ref={this.setAnim}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height - 320
            }}
            source={EXAMPLES[this.state.example].getJson()}
            progress={this.state.progress}
          />
        </View>
        <View style={StyleSheet.absoluteFill, {
          height: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
          flex: 1,
          justifyContent: 'center',
          width: 300
        }}>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={this.state.progress.__getValue()}
            onValueChange={this.updateProgress} />
          <Picker
            example={this.state.example}
            examples={EXAMPLES}
            onChange={(example) => {this.setState({example});this.reRunAnimate(); }} />
          <Button title="Random" onPress={this.randomAnimate} />
          <Button title="Rerun" onPress={this.reRunAnimate} />
          <Button title="Pause" onPress={this.pauseAnimate} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
