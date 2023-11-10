import React, { useState } from 'react'
import Button from './Button';

function Calculator() {

    const [display, setDisplay] = useState('0');
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
     if (value === '=') {
      try {
        const result = eval(input);
        setDisplay(result);
        setInput(result);
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setInput('');
    } else {
      const newInput = input + value;
      setDisplay(newInput);
      setInput(newInput);
    }
  };

  return (
    <>
      <div className='contain'>
        <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="/" onClick={() => handleButtonClick('/')} />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="*" onClick={() => handleButtonClick('*')} />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="-" onClick={() => handleButtonClick('-')} />
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="C" onClick={() => handleButtonClick('C')} />
          <Button label="=" onClick={() => handleButtonClick('=')} />
          <Button label="+" onClick={() => handleButtonClick('+')} />
        </div>
      </div>
      </div>
    </>
  )
}

export default Calculator