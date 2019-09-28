import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from './styles/GlobalStyle';
import Meta from './Meta';
import Nav from './Nav';

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <Meta />
    <Nav />
    <PageContent>
      {children}
    </PageContent>
  </>
);

const PageContent = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  overflow: hidden;
`;

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Page;
