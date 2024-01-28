import React from 'react';

const Entry = ({ cardNumber, setCardNumber }) => {
  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };

  return (
    <input
      type="text"
      value={cardNumber}
      onChange={handleChange}
      placeholder="Enter credit card number"
    />
  );
};

export default Entry;