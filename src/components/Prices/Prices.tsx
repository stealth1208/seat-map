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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (data) {
      const { lastItem } = data;
      console.log('lastItem', lastItem);
      // console.log('data', data);

      const basePrice = BookingPrices[lastItem.type as SeatType];
      let sumPrice = 0;
      Object.keys(data).map(item => {
        if (Array.isArray(data[item])) {
          const selecting = data[item].filter((i: SeatInfo) => i.status === SeatStatus.SELECTING);
          if (selecting.length) {
            setTotalPrice(prev => (sumPrice += selecting.length * basePrice));
          } else {
            setTotalPrice(prev => (sumPrice -= basePrice));
          }
        }
      });
    }
  }, [data]);
  return <Wrapper>{totalPrice}</Wrapper>;
};

export default Prices;
