import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = Styled.Text`
  font-size: 24px;
`;

const CountContainer = Styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const CountLabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}

const Counter = ({ title, initValue }: Props) => {
  const [ count, setCount ] = useState<number>(0);
  return (
    <Coutainer>
      <CountContainer>

      </CountContainer>
    </Coutainer>
  )
};

export default Counter;
