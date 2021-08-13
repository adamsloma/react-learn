import React, { useState } from 'react';

export function FruitPicker(props) {
  const [fruit, setFruit] = useState('');

  return (
    <>
      <h1>{fruit}</h1>
      <button onClick={() => setFruit('🍉')}>🍉</button>
      <button onClick={() => setFruit('🍎')}>🍎</button>
      <button onClick={() => setFruit('🍇')}>🍇</button>
      <button onClick={() => setFruit('🍌')}>🍌</button>
      <button onClick={() => setFruit('🍐')}>🍐</button>
      <button onClick={() => setFruit('🍑')}>🍑</button>
    </>
  );
}
