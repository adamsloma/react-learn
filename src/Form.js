import React from 'react';

export function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('this ya boy');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
