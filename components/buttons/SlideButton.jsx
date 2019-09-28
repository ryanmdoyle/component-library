/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const SlideButton = () => (
  <>
    <Slide href="#">
      Slide
    </Slide>
  </>
);

const Slide = styled.a`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1.5rem;
  border: 3px solid black;
  margin: 0 1rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;

  :hover {
    color: ${(props) => props.theme.orange};
    border: 3px solid ${(props) => props.theme.orange};
    transition: color 0.45s, border 0.45s;
  }

  :before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.purple};
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  :hover:before {
    transform: rotate(0deg);
  }
`;

export default SlideButton;
