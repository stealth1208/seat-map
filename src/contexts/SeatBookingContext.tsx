import React, { useState, useContext, useCallback } from 'react';
import { AppData } from '@Contexts';

export type SeatInfo = {
  number: number;
  type: number;
  status: number;
};

type DataType = {
  seatInfo: {
    [key: string]: SeatInfo[];
  };
  prices: number;
  count: number;
};

type NextData = {
  row: string;
  seatInfo: {
    number: number;
    type: number;
    status: number;
  };
  price: number;
  count: number;
};

export enum SeatStatus {
  BOOKED = 0,
  AVAILABLE = 1,
  SELECTING = 2,
  UNDEFINED = -1,
}

export enum SeatType {
  STANDARD = 1,
  VIP = 2,
  DELUXE = 3,
  UNDEFINED = -1,
}

type AppContext = {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
};

const SeatBookingContext = React.createContext<any>({});

export const AppContextProvider = (props: any) => {
  const { children } = props;
  const [data, setData] = useState({
    seatInfo: {
      ...AppData,
    },
    prices: 0,
    count: 0,
  });
  return (
    <SeatBookingContext.Provider value={{ data, setData }}>{children}</SeatBookingContext.Provider>
  );
};

export const useAppContext = () => {
  const { setData: updateDataFromContext, data: context } = useContext(SeatBookingContext);

  const setContext = useCallback(
    (nextData: NextData) => {
      updateDataFromContext((prev: DataType) => {
        const newArray = prev.seatInfo[nextData.row].map((item: SeatInfo, index: number) => {
          if (nextData.seatInfo.number - 1 === index) {
            return {
              ...item,
              ...nextData.seatInfo,
            };
          }
          return item;
        });

        return {
          ...prev,
          seatInfo: {
            ...prev.seatInfo,
            [nextData.row]: newArray,
          },
          prices: prev.prices + nextData.price,
          count: prev.count + nextData.count,
        };
      });
    },
    [updateDataFromContext],
  );

  return [context, setContext];
};
