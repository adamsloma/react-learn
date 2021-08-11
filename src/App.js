import React from 'react';
import { Welcome } from './Welcome.js';
import { Clock } from './Clock.js';
import { Lasers } from './Lasers.js';
import { Form } from './Form.js';
import { Greeting } from './Greeting.js';
import { LoginControl } from './LoginControl.js';

import './style.css';

export default function App() {
  return (
    <>
      {/* <Clock />
      <Lasers />
      <Form />
      <Greeting isLoggedIn={false} /> */}
      <LoginControl />
    </>
  );
}
