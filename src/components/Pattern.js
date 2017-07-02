import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: ${props => props.font};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: inherit;
  color: inherit;
`;


const Pattern = props => {
  const {font, colorPrimary, colorSecondary, title, description} = props;

  return (
    <Container backgroundColor={colorPrimary} color={colorSecondary} font={font.css}>
      <Title>{font.name}</Title>
    </Container>
  )
}

export default Pattern;
