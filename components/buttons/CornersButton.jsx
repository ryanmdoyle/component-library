/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const CornersButton = () => (
  <>
    <Corners href="#">
      Corners
    </Corners>
  </>
);

const Corners = styled.a`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1.5rem;
  border: 3px solid black;
  margin: 0 1rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  transition: color 1s;


  :hover {
    color: white;
    transition: color 1s;
  }

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.darkPurple};
    height: 100%;
    width: 101%;
    transform: rotateX(90deg);
    transition: transform 1s;
    z-index: -1;
  }

  :hover:before {
    transform: rotateX(0deg);
  }
  
  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.darkPurple};
    height: 100%;
    width: 100%;
    transform: rotateY(90deg);
    transition: transform 1s;
    z-index: -1;
  }

  :hover:after {
    transform: rotateY(0deg);
  }

`;

export default CornersButton;
