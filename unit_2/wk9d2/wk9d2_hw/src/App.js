import React, { useState } from 'react';
import Entry from './components/Entry';
import Output from './components/Output';

function App() {
  const [cardNumber, setCardNumber] = useState('');

  function validCard(number) {
    const numStr = number.toString();
    const checksum = parseInt(numStr.slice(-1));

    let total = numStr
      .slice(0, -1)
      .split('')
      .reverse()
      .map((digit, index) => {
          let num = parseInt(digit);

          if (index % 2 === 0) {
              num *= 2;
              return num > 9 ? num - 9 : num;
          }

          return num;
      })
      .reduce((acc, curr) => acc + curr, 0);

    return (10 - (total % 10)) === checksum;
  }

  return (
    <div className="App">
      <Entry cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <Output valid={validCard(cardNumber)} />
    </div>
  );
}

export default App;