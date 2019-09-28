/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const BubbleButton = () => (
  <>
    <Bubble href="#">
      Bubble
    </Bubble>
  </>
);

const Bubble = styled.a`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1.5rem;
  border: 3px solid black;
  margin: 0 1rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    left: -300px;
    top: -500px;
    background-color: lavender;
    height: 500px;
    width: 500px;
    border-radius: 500px;
    z-index: -1;
    transform-origin: top left;
    transition: transform 1.2s;
  }

  :hover:before {
    transform: translate(280px, 300px)
  }
`;

export default BubbleButton;
