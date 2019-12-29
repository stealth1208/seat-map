import React, { useState, useEffect } from 'react';
import { useAppContext } from '@Contexts';
import { Wrapper } from './Prices.styled';
import { SeatType, SeatStatus, SeatInfo } from '@Contexts/SeatBookingContext';

const BookingPrices = {
  [SeatType.STANDARD]: 60000,
  [SeatType.VIP]: 80000,
  [SeatType.DELUXE]: 110000,
};

const Prices: React.FunctionComponent<{}> = () => {
  const [data] = useAppContext();
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState([]);

  useEffect(() => {}, [data]);

  return <Wrapper>{sum}</Wrapper>;
};

export default Prices;
