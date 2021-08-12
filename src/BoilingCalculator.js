import React from 'react';
import { BoilingVerdict } from './BoilingVerdict.js';
import { TemperatureInput } from './TemperatureInput.js';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export class BoilingCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: ''
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;

    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <fieldset>
        <TemperatureInput
          onTemperatureChange={this.handleCelsiusChange}
          temperature={celsius}
          scale="c"
        />
        <TemperatureInput
          onTemperatureChange={this.handleFahrenheitChange}
          temperature={fahrenheit}
          scale="f"
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </fieldset>
    );
  }
}
