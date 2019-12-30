import React, { useCallback } from 'react';
import { Wrapper } from './SeatButton.styled';
import { useAppContext } from '@Contexts';
import { SeatType, SeatStatus } from '@Contexts/SeatBookingContext';

interface Props {
  row: string;
  column: number;
  type: number;
  status: number;
}

type Seat = {
  number: number;
  type: number;
  status: number;
};

const BookingPrices = {
  [SeatType.STANDARD]: 60000,
  [SeatType.VIP]: 80000,
  [SeatType.DELUXE]: 110000,
};

const SeatButton: React.FunctionComponent<Props> = ({ type, status, row, column }) => {
  const [data, setData] = useAppContext();
  const onSelectSeat = useCallback(() => {
    if (status === SeatStatus.BOOKED) {
      return;
    }

    setData({
      row,
      seatInfo: {
        number: column,
        status: status === SeatStatus.AVAILABLE ? SeatStatus.SELECTING : SeatStatus.AVAILABLE,
      },
      price: SeatStatus.AVAILABLE
        ? BookingPrices[type as SeatType]
        : -BookingPrices[type as SeatType],
    });
  }, [column, row, status]);

  return (
    <Wrapper type={type} status={status} onClick={onSelectSeat}>
      {row}
    </Wrapper>
  );
};

export default React.memo(SeatButton);
