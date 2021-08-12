import React from 'react';
import { FancyBorder } from './FancyBorder.js';

export function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export function WelcomeDialog(props) {
  return (
    <Dialog title="Welcome!" message="Come join our minecraft!!!!!!!!!!!" />
  );
}

export class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: ''
    };
  }

  handleChange(e) {
    this.setState({
      login: e.target.value
    });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Up</button>
      </Dialog>
    );
  }
}
