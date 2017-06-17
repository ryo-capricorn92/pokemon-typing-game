import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';

const WindowRow = Grid.extend`
  height: 400px;
  max-height: 400px;
  flex-grow: 0;
`;

WindowRow.defaultProps = {
  row: true,
  justify: 'space-around',
};

const FightWindow = styled.div`
  width: 650px;
  height: 400px;
  background-color: #fffee6;
  border-radius: 20px;
`;

const FightText = styled.input`
  width: 500px;
  height: 150px;
  background: linear-gradient(
    180deg,
    rgba(143, 211, 63, 1) 0%,
    rgba(172, 242, 131, 1) 100%
  );
  border-radius: 20px;
  outline: none;
  border: 2px solid white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  font-family: courier;
`;

const TextRow = Grid.extend`
  height: 150px;
  max-height: 150px;
  flex-grow: 0;
`;

TextRow.defaultProps = {
  row: true,
  justify: 'space-around',
};

const Fight = () => (
  <Grid column justify="space-around">
    <WindowRow>
      <FightWindow />
    </WindowRow>
    <TextRow>
      <FightText />
    </TextRow>
  </Grid>
);

export default Fight;
