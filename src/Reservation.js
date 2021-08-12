import React from 'react';

export class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;

    // if the event target is a checkbox, get whether it's checked, else pull the value variable
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name; // the event target's name identifies it as a checkmark or a text input

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    alert(
      `${this.state.numberOfGuests} are ${
        this.state.isGoing ? '' : 'not '
      }going!`
    );
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isGoing}
          />
        </label>
        <label htmlFor="">
          Number of Guests
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
