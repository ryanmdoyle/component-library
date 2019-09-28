/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const SwipeButton = () => (
  <>
    <Swipe>
      <a href="#">Hover</a>
    </Swipe>
  </>
);

const Swipe = styled.div`
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: black;
    font-family: sans-serif;
    font-size: 32px;
    border: 5px solid black;
    padding: 40px 80px;
    position: relative;
    overflow: hidden;
  }

  a:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: yellow;
    height: 100%;
    width: 110%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }

  a:hover:before {
    transform: rotate(0deg);
  }
`;

export default SwipeButton;
