import React from 'react';

export function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water will boil. </p>;
  } else {
    return <p>The water won't boil bro.</p>;
  }
}
