import React from 'react';

export type Data = {
  row: string;
  type: number;
  columns: {
    idx: number;
    status: number;
  }[];
};

const SeatBookingContext = React.createContext<{
  data: Data[];
}>({
  data: [],
});

export default SeatBookingContext;
