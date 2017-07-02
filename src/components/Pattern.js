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
`;

const Title = styled.h1`
  font-size: 2rem;
  color: inherit;
  font-family: ${props => props.fontFamily};
`;


const Pattern = props => {
  const {fontFamily, colorPrimary, colorSecondary, title, description} = props;

  return (
    <Container backgroundColor={colorPrimary} color={colorSecondary}>
      <Title fontFamily={fontFamily}>{fontFamily}</Title>
    </Container>
  )
}

export default Pattern;
