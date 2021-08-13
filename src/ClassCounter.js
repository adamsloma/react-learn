import React from 'react';

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
