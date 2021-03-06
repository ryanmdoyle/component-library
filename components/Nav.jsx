/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => (
  <Header>
    <NavStyled>
      <ul>
        <li>
          <Link href="/buttons">
            <a>Buttons</a>
          </Link>
        </li>
        <li>
          <Link href="/text">
            <a>Text</a>
          </Link>
        </li>
      </ul>
    </NavStyled>
  </Header>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid black;
`;

const NavStyled = styled.nav`
  ul {
    margin: 0.25rem 0 1rem 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    display: inline;
    margin: 0 1rem;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.green};
  }
`;

export default Nav;
