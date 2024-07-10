import React, { useState } from 'react';
import './style.css';

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handleClick = (value: string) => {
    switch (value) {
      case 'C':
        setDisplay('');
        break;
      case '=':
        try {
          setDisplay(eval(display).toString());
        } catch {
          setDisplay('Error');
        }
        break;
      default:
        setDisplay(display + value);
    }
  };

  return (
    <div id="page-container">
      <h1>Big Calculator</h1>
      <div id="calculator">
      <h1>Small Calculator</h1>
        <input type="text" id="display" value={display} disabled />
        <div className="buttons">
          {[
            '7',
            '8',
            '9',
            '/',
            '4',
            '5',
            '6',
            '*',
            '1',
            '2',
            '3',
            '-',
            '0',
            '.',
            'C',
            '+',
            '=',
          ].map((btnValue) => (
            <button
              key={btnValue}
              className="btn"
              onClick={() => handleClick(btnValue)}
            >
              {btnValue}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
