import React, { useState } from 'react';

// Functional Lasers component
function LasersFunction() {
  const [active, setActive] = useState(false);

  function activateLasers() {
    setActive(!active);
  }

  return (
    <>
      <button onClick={activateLasers}>Activate Lasers!</button> <br />
      {active ? '💥💥💥💥' : '🌫🌫🌫🌫'}
    </>
  );
}

// Class based Lasers component
export class Lasers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    // bind the activateLasers function to this so it can be used in render, and it can access this
    this.activateLasers = this.activateLasers.bind(this);
  }

  activateLasers(e) {
    this.setState(prev => ({ active: !prev.active }));
  }

  render() {
    return (
      <>
        <button onClick={this.activateLasers}>Activate Lasers!</button> <br />
        {this.state.active ? '💥💥💥💥' : '🌫🌫🌫🌫'}
      </>
    );
  }
}
