import React from 'react';
import ReactDOM from 'react-dom';

import Pattern from 'components/pattern';

const App = () => {
  const patterns = [
    {
      colors: ["#663399", "#FF6633"],
      fontFamily: "Times New Roman"
    },
    {
      colors: ["#33CCFF", "#FFFF33"],
      fontFamily: "Avenir"
    },
  ];

  return (
    <div className="sections">
      {patterns.map((item, index) => (
        <Pattern
          fontFamily={item.fontFamily}
          colorPrimary={item.colors[0]}
          colorSecondary={item.colors[1]}
          key={index}
        />
      ))}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
