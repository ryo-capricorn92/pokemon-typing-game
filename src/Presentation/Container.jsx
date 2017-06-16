import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';

let styled;

/* Header */
styled = Grid.extend.withConfig({
  displayName: 'Header'
});

const Header = styled`
  height: 40px;
  max-height: 40px;
  background-color: gray;
`;

/* Footer */
styled = Grid.extend.withConfig({
  displayName: 'Footer'
});

const Footer = styled`
  height: 40px;
  max-height: 40px;
  background-color: gray;
`

/* MainContainer */
styled = Grid.extend.withConfig({
  displayName: 'MainContainer'
});

const MainContainer = styled`
  background-color: lightgray;
`

/* AppGrid */
styled = Grid.extend.withConfig({
  displayName: 'AppGrid',
});

const AppGrid = styled`
  height: 100vh;
`

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
