import React from 'react';
import { Welcome } from './Welcome.js';
import { Clock } from './Clock.js';
import { Lasers } from './Lasers.js';
import { Form } from './Form.js';
import { Greeting } from './Greeting.js';
import { LoginControl } from './LoginControl.js';
import { NumberList } from './NumberList.js';
import { NameForm } from './NameForm.js';
import { EssayForm } from './EssayForm.js';
import { FlavorForm } from './FlavorForm.js';
import { Reservation } from './Reservation.js';
import { BoilingCalculator } from './BoilingCalculator.js';
import { FancyBorder } from './FancyBorder.js';
import { SplitPane } from './SplitPane.js';
import { Dialog, WelcomeDialog, SignUpDialog } from './Dialog.js';
import { FunctionCounter } from './FunctionCounter.js';
import { ClassCounter } from './ClassCounter.js';
import { FruitPicker } from './FruitPicker.js';

import './style.css';

export default function App() {
  return (
    <>
      {/* <Clock /> */}
      {/* <Lasers /> */}
      {/* <Form /> */}
      {/* <Greeting isLoggedIn={false} /> */}
      {/* <LoginControl /> */}
      {/* <NumberList numbers={[1, 2, 3, 4]} /> */}
      {/* <NameForm /> */}
      {/* <EssayForm /> */}
      {/* <FlavorForm /> */}
      {/* <Reservation /> */}
      {/* <BoilingCalculator /> */}
      {/* <FancyBorder color="green">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">
          Thank you for visiting our minecraft!!!!
        </p>
      </FancyBorder> */}
      {/* <SplitPane
        left={<div>This on the left</div>}
        right={<div>This on the right</div>}
      /> */}
      {/* <Dialog title="skr skr" message="skrskrskrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" /> */}
      {/* <WelcomeDialog /> */}
      {/* <SignUpDialog /> */}
      {/* <FunctionCounter /> */}
      {/* <ClassCounter /> */}
      <FruitPicker />
    </>
  );
}
