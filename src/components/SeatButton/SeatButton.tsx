import * as React from 'react';

interface IProps {}

export enum SeatType {
  STANDARD = 1,
  VIP = 2,
  DELUXE = 3,
}

const BookingPrices = {
  [SeatType.STANDARD]: 60000,
  [SeatType.VIP]: 80000,
  [SeatType.DELUXE]: 110000,
};

const SeatButton: React.FunctionComponent<IProps> = props => {
  return <div>abc</div>;
};

export default SeatButton;
