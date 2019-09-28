import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridContainer = ({ children }) => (
  <FlexGridStyled>
    {children}
  </FlexGridStyled>
);

const FlexGridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  padding: 1rem;
  box-sizing: border-box;
  div {
    margin: 5px;
  }
`;

GridContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default GridContainer;
