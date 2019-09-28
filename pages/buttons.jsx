import React from 'react';
import styled from 'styled-components';

import SwipeButton from '../components/buttons/SwipeButton';
import BubbleButton from '../components/buttons/BubbleButton';
import SlideButton from '../components/buttons/SlideButton';
import CornersButton from '../components/buttons/CornersButton';

const buttons = () => (
  <ButtonsFlexContainer>
    <SwipeButton />
    <BubbleButton />
    <SlideButton />
    <CornersButton />
  </ButtonsFlexContainer>
);

const ButtonsFlexContainer = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  height: 100%;
`;

export default buttons;
