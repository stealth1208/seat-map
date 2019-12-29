import React, { useState, useContext, useCallback } from 'react';
import { AppData } from '@Contexts';

export type SeatInfo = {
  number: number;
  type: number;
  status: number;
};

type DataType = {
  [key: string]: SeatInfo[];
};

export enum SeatStatus {
  BOOKED = 0,
  AVAILABLE = 1,
  SELECTING = 2,
}

export enum SeatType {
  STANDARD = 1,
  VIP = 2,
  DELUXE = 3,
}

type AppProps = {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
};

type NextData = {
  row: string;
  seatInfo: {
    number: number;
    type: number;
    status: number;
  };
};

export const AppContextProvider = (props: any) => {
  const { children } = props;
  const [data, setData] = useState({ ...AppData });
  return (
    <SeatBookingContext.Provider value={{ data, setData }}>{children}</SeatBookingContext.Provider>
  );
};

const SeatBookingContext = React.createContext<any>({});

export const useAppContext = () => {
  const { setData: updateDataFromContext, data: context } = useContext(SeatBookingContext);

  const setContext = useCallback(
    (nextData: NextData) => {
      updateDataFromContext((prev: DataType) => {
        const temp = prev[nextData.row].map((item: SeatInfo, index: number) => {
          if (nextData.seatInfo.number - 1 === index) {
            item = {
              ...item,
              ...nextData.seatInfo,
            };
            return item;
          }
          return item;
        });

        return {
          ...prev,
          [nextData.row]: temp,
        };
      });
    },
    [updateDataFromContext],
  );

  return [context, setContext, updateDataFromContext];
};
