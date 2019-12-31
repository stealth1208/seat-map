import styled from 'styled-components';
import { COLORS } from '@Styles/variables';
import { SeatStatus, SeatType } from '@Contexts/SeatBookingContext';

export const SeatStatusBgColors = {
  [SeatStatus.BOOKED]: COLORS.GREY,
  [SeatStatus.AVAILABLE]: 'transparent',
  [SeatStatus.SELECTING]: COLORS.WHITE,
  [SeatStatus.UNDEFINED]: 'transparent',
};

export const SeatTypeBorderColors = {
  [SeatType.STANDARD]: COLORS.WHITE,
  [SeatType.VIP]: COLORS.GREEN,
  [SeatType.DELUXE]: COLORS.BLUE,
  [SeatType.UNDEFINED]: COLORS.WHITE,
};

export const ButtonColors = {
  [SeatStatus.BOOKED]: COLORS.WHITE,
  [SeatStatus.AVAILABLE]: COLORS.WHITE,
  [SeatStatus.SELECTING]: COLORS.BLACK,
  [SeatStatus.UNDEFINED]: COLORS.WHITE,
};

export const Wrapper = styled.div<{
  type: SeatType;
  status: SeatStatus;
}>`
  width: 35px;
  height: 30px;
  border-radius: 40%;
  border-color: ${({ type = SeatType.STANDARD }) => SeatTypeBorderColors[type]};
  border-width: 1px;
  border-style: solid;
  font-size: 1.2rem;
  color: ${({ status }) => ButtonColors[status]};
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  background-color: ${({ status = SeatStatus.AVAILABLE }) => SeatStatusBgColors[status]};
  cursor: pointer;
  margin: 0 0.5rem;
`;
