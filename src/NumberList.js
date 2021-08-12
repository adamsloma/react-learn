import React from 'react';

export function NumberList(props) {
  const numbers = props.numbers;

  return (
    <>
      <ul>
        {numbers.map(number => (
          <li>{number * 8}</li>
        ))}
      </ul>
    </>
  );
}
