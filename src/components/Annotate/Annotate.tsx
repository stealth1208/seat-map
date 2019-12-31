import React from 'react';
import { SeatStatus, SeatType } from '@Contexts/SeatBookingContext';
import {
  Wrapper, Blocks, Block, Circle, Text,
} from './Annotate.styled';

const Annotate: React.FunctionComponent<{}> = (props) => (
  <Wrapper>
    <Blocks>
      <Block>
        <Circle status={SeatStatus.BOOKED} />
        <Text>Đã đặt</Text>
      </Block>
      <Block>
        <Circle status={SeatStatus.SELECTING} />
        <Text>Đang chọn</Text>
      </Block>
    </Blocks>
    <Blocks>
      <Block>
        <Circle type={SeatType.STANDARD} />
        <Text>Standard - 60000</Text>
      </Block>
      <Block>
        <Circle type={SeatType.VIP} />
        <Text>VIP - 80000</Text>
      </Block>
      <Block>
        <Circle type={SeatType.DELUXE} />
        <Text>Deluxe - 110000</Text>
      </Block>
    </Blocks>
  </Wrapper>
);

export default Annotate;
