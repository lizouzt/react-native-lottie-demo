import React, { PropTypes } from 'react';
import {
  Picker,
  Platform,
} from 'react-native';

const propTypes = {
  example: PropTypes.any,
  onChange: PropTypes.func,
  examples: PropTypes.any,
};

export default class ExamplePicker extends React.Component {
  render() {
    return (
      <Picker
        selectedValue={this.props.example}
        onValueChange={this.props.onChange}
        style={{
          height: 160,
          marginBottom: Platform.select({
            ios: -30,
            android: 0,
          }),
        }}
      >
        {Object.keys(this.props.examples).map(name => this.props.examples[name]).map(ex => (
          <Picker.Item
            key={ex.name}
            label={ex.name}
            value={ex.name}
          />
        ))}
      </Picker>
    );
  }
}

ExamplePicker.propTypes = propTypes;