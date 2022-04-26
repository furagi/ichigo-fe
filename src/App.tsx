import React, { useCallback, useState } from 'react';
import './App.scss';

function App() {
  const [colors, setColors] = useState([
    'rgb(1, 125, 219)',
    'rgb(232, 33, 78)',
    'rgb(130, 111, 81)',
    'rgb(180, 80, 87)',
    'rgb(118, 0, 198)',
    'rgb(0, 170, 149)',
    'rgb(0, 112, 92)',
    'rgb(92, 67, 253)',
    'rgb(61, 92, 88)',
  ]);

  const shuffleColors = useCallback(() => setColors((items) => {
    const newItems = [...items];
    for (let i = newItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
    }
    return newItems;
  }), [setColors]);

  return (
    <div className="container">
      {colors.map((color, index) => (
        <div
          className={`container__item container__item-${index + 1}`}
          key={color}
          style={{ backgroundColor: color }}
          onClick={shuffleColors}
        >
          <span>
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
