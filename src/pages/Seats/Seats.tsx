import React from 'react';
import { SeatButton, Prices } from '@Components';
import { useAppContext } from '@Contexts';
import { Wrapper, RowNames, Rows } from './Seats.styled';
import { SeatInfo } from '@Contexts/SeatBookingContext';

interface ISeatsProps {}

const Seats: React.FunctionComponent<ISeatsProps> = props => {
  const [{ seatInfo, count }] = useAppContext();

  return (
    <Wrapper>
      {Object.keys(seatInfo).map((key: string, index: number) => (
        <Rows key={index}>
          <RowNames>{key}</RowNames>
          {seatInfo[key].map(({ number, type, status }: SeatInfo, idx: number) => (
            <SeatButton
              key={`${number}_${idx}`}
              type={type}
              status={status}
              row={key}
              column={number}
              isDisabled={count > 5}
            />
          ))}
        </Rows>
      ))}

      <Prices />
    </Wrapper>
  );
};

export default React.memo(Seats);
