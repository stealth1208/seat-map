import React, { useCallback } from 'react';
import { Wrapper } from './SeatButton.styled';
import { useAppContext } from '@Contexts';
import { SeatType, SeatStatus } from '@Contexts/SeatBookingContext';

interface Props {
  row: string;
  column: number;
  type: number;
  status: number;
  isDisabled?: boolean;
}

const BookingPrices = {
  [SeatType.STANDARD]: 60000,
  [SeatType.VIP]: 80000,
  [SeatType.DELUXE]: 110000,
};

const SeatButton: React.FunctionComponent<Props> = ({ type, status, row, column, isDisabled }) => {
  const [, setData] = useAppContext();

  const onSelectSeat = useCallback(() => {
    if (status === SeatStatus.BOOKED) {
      return;
    }

    if (status === SeatStatus.AVAILABLE && isDisabled) {
      return;
    }

    const price = BookingPrices[type as SeatType];
    setData({
      row,
      seatInfo: {
        number: column,
        status: status === SeatStatus.AVAILABLE ? SeatStatus.SELECTING : SeatStatus.AVAILABLE,
      },
      price: status === SeatStatus.SELECTING ? -price : price,
      count: status === SeatStatus.SELECTING ? -1 : 1,
    });
  }, [column, row, status, setData, type, isDisabled]);

  return (
    <Wrapper type={type} status={status} onClick={onSelectSeat}>
      {row}
      {column}
    </Wrapper>
  );
};

export default React.memo(SeatButton);
