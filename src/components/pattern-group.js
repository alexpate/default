import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Pattern from 'components/pattern';

const Main = styled.main`
  width: 100%;
`;

const PatternGroup = () => {
  const patterns = [
    {
      colors: ["#663399", "#FF6633"],
      font: {
        name: "Times New Roman",
        css: "Times New Roman, serif"
      }
    },
    {
      colors: ["#33CCFF", "#FFFF33"],
      font: {
        name: "Avenir",
        css: "Avenir, san-serif"
      }
    },
  ];

  return (
    <Main>
      {patterns.map((item, index) => (
        <Pattern
          font={item.font}
          colorPrimary={item.colors[0]}
          colorSecondary={item.colors[1]}
          key={index}
        />
      ))}
    </Main>
  )
}

export default PatternGroup;
