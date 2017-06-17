import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';

/* Header */
const Header = Grid.extend`
  height: 50px;
  max-height: 50px;
  background: linear-gradient(
    180deg, 
    rgba(142, 226, 255, 1) 0%, 
    rgba(0, 157, 217, 1) 50%, 
    rgba(0, 99, 138, 1) 100%);
`;

/* Footer */
const Footer = Grid.extend`
  height: 50px;
  max-height: 50px;
  background: linear-gradient(
    180deg, 
    rgba(0, 99, 138, 1) 0%, 
    rgba(0, 157, 217, 1) 50%, 
    rgba(142, 226, 255, 1) 100%
  );
`

/* MainContainer */
const MainContainer = Grid.extend`
  background: linear-gradient(
    180deg,
    rgba(225, 246, 250, 1) 0%,
    rgba(170, 231, 242, 1) 100%
  );
`;


/* AppGrid */
const AppGrid = Grid.extend`
  height: 100vh;
`

/* Container */
const Container = ({ children }) => (
  <AppGrid column>
    <Header />
    <MainContainer>
      { children }
    </MainContainer>
    <Footer />
  </AppGrid>
);

Container.propTypes = {
  children: PropTypes.node,
}

export default Container;
