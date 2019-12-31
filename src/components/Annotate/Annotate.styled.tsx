import styled from 'styled-components';
import { COLORS } from '@Styles/variables';
import { SeatStatus, SeatType } from '@Contexts/SeatBookingContext';
import { SeatStatusBgColors, SeatTypeBorderColors } from '@Components/SeatButton/SeatButton.styled';

export const Wrapper = styled.div`
  display: flex;
  color: ${COLORS.WHITE};
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const Blocks = styled.div``;

export const Text = styled.div`
  font-size: 1.5rem;
`;

export const Circle = styled.div<{
  type?: SeatType;
  status?: SeatStatus;
}>`
  border-color: ${({ type = SeatType.UNDEFINED }) => SeatTypeBorderColors[type]};
  border-width: 1px;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border-style: solid;
  margin-right: 1rem;
  background-color: ${({ status = SeatStatus.UNDEFINED }) => SeatStatusBgColors[status]};
`;
