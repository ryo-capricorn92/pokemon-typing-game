import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';

//   ///////////////////////////
//  ///// Grid Containers /////
// ///////////////////////////
const WindowRow = Grid.extend`
  height: 400px;
  max-height: 400px;
  flex-grow: 0;
`;

WindowRow.defaultProps = {
  row: true,
  justify: 'space-around',
};

const TextRow = Grid.extend`
  height: 150px;
  max-height: 150px;
  flex-grow: 0;
`;

TextRow.defaultProps = {
  row: true,
  justify: 'space-around',
};

const FightScreenRow = Grid.extend`
  height: 200px;
`;

FightScreenRow.defaultProps = {
  row: true,
};

//   /////////////////////////////
//  ///// Styled Containers /////
// /////////////////////////////
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

const Header = Grid.extend`
  height: 31px;
  max-height: 31px;
  border-radius: 17px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: linear-gradient(
    180deg, 
    #ffbd4f 0%, 
    #ff9900 100%
  );
`;

const HpBar = Grid.extend`
  height: 50px;
  max-height: 350px;
  background: linear-gradient(
    180deg, 
    #ffbd4f 0%, 
    #ff9900 100%
  );
`;

//   ////////////////////////
//  ///// Fight Window /////
// ////////////////////////
const Fight = () => (
  <Grid column justify="space-around">
    <WindowRow>
      <FightWindow>
        <Grid column>
          <Header />
          <FightScreenRow>
            <Grid />
            <Grid column>
              <Grid />
              <Grid shrink>
                <img />
              </Grid>
              <Grid />
            </Grid>
            <Grid />
          </FightScreenRow>
          <HpBar />
          <Grid />
        </Grid>
      </FightWindow>
    </WindowRow>
    <TextRow>
      <FightText />
    </TextRow>
  </Grid>
);

export default Fight;
