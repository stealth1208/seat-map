import React from 'react';
import { useAppContext } from '@Contexts';
import {
  Wrapper, Label, Total, TotalWrapper, CinemaInfo,
} from './Prices.styled';

const Prices: React.FunctionComponent<{}> = () => {
  const [{ prices }] = useAppContext();

  return (
    <Wrapper>
      <CinemaInfo>
        <div>CGV Cresent Mall</div>
      </CinemaInfo>
      <TotalWrapper>
        <Label>Tổng cộng: </Label>
        <Total>{prices}</Total>
      </TotalWrapper>
    </Wrapper>
  );
};

export default React.memo(Prices);
