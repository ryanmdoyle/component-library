import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Meta from './Meta';
import Nav from './Nav';

const PageContent = styled.div`
      max-width: ${(props) => props.theme.maxWidth};
      margin: 1rem auto;
      overflow: hidden;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContent>
      <GlobalStyle />
      <Meta />
      <Nav />
      {children}
    </PageContent>
  </ThemeProvider>
);

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Page;
