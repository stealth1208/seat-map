import React from 'react';
import { SeatButton, Prices } from '@Components';
import { useAppContext } from '@Contexts';
import { Wrapper, RowNames, Rows } from './Seats.styled';

interface ISeatsProps {}

type SeatInfo = {
  number: number;
  type: number;
  status: number;
};

const Seats: React.FunctionComponent<ISeatsProps> = props => {
  const [data] = useAppContext();
  console.log('data', data);
  return (
    <Wrapper>
      {Object.keys(data).map((key: string, index: number) => (
        <Rows key={index}>
          <RowNames>{key}</RowNames>
          {Array.isArray(data[key]) &&
            data[key].map(({ number, type, status }: SeatInfo, idx: number) => (
              <SeatButton
                key={`${number}_${idx}`}
                type={type}
                status={status}
                row={key}
                column={number}
              />
            ))}
        </Rows>
      ))}

      <Prices />
    </Wrapper>
  );
};

export default React.memo(Seats);
