import React from 'react';

export class Welcome extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
