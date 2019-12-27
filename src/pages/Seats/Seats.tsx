import React, { useContext } from 'react';
import { SeatButton } from '@Components';
import { SeatBookingContext } from '@Contexts';

interface ISeatsProps {}

const Seats: React.FunctionComponent<ISeatsProps> = props => {
  const { data } = useContext(SeatBookingContext);
  console.log('data', data);
  return <SeatButton />;
};

export default Seats;
