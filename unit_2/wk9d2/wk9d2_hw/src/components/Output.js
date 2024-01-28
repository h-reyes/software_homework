import React from 'react';

const Output = ({ valid }) => {
  if (valid) {
    return <p>The card is valid.</p>;
  } else {
    return <p>The card is invalid.</p>;
  }
};

export default Output;