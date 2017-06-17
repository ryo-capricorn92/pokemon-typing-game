import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';

let styled;

/* Header */
/* -------------- */
styled = Grid.extend.withConfig({
  displayName: 'Header'
});

const Header = styled`
  height: 40px;
  max-height: 40px;
  background: linear-gradient(
    180deg, 
    rgba(142, 226, 255, 1) 0%, 
    rgba(0, 157, 217, 1) 50%, 
    rgba(0, 99, 138, 1) 100%);
`;
/* -------------- */


/* Footer */
/* -------------- */
styled = Grid.extend.withConfig({
  displayName: 'Footer'
});

const Footer = styled`
  height: 40px;
  max-height: 40px;
  background: linear-gradient(
    180deg, 
    rgba(0, 99, 138, 1) 0%, 
    rgba(0, 157, 217, 1) 50%, 
    rgba(142, 226, 255, 1) 100%
  );
`
/* -------------- */


/* MainContainer */
/* -------------- */
styled = Grid.extend.withConfig({
  displayName: 'MainContainer'
});

const MainContainer = styled`
  background: linear-gradient(
    180deg,
    rgba(225, 246, 250, 1) 0%,
    rgba(170, 231, 242, 1) 100%
  );
`
/* -------------- */


/* AppGrid */
/* -------------- */
styled = Grid.extend.withConfig({
  displayName: 'AppGrid',
});

const AppGrid = styled`
  height: 100vh;
`
/* -------------- */


/* Container */
/* -------------- */
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
/* -------------- */


export default Container;
