import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
);

const LayoutStyled = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  overflow: hidden;
`;

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Layout;
