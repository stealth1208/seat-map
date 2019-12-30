import styled from 'styled-components';
import { COLORS } from '@Styles/variables';
import { SeatStatus, SeatType } from '@Contexts/SeatBookingContext';

const SeatStatusBgColors = {
  [SeatStatus.BOOKED]: COLORS.GREY,
  [SeatStatus.AVAILABLE]: 'transparent',
  [SeatStatus.SELECTING]: COLORS.WHITE,
};

const SeatStatusBorderColors = {
  [SeatType.STANDARD]: COLORS.WHITE,
  [SeatType.VIP]: COLORS.GREEN,
  [SeatType.DELUXE]: COLORS.BLUE,
};

const ButtonColors = {
  [SeatStatus.BOOKED]: COLORS.WHITE,
  [SeatStatus.AVAILABLE]: COLORS.WHITE,
  [SeatStatus.SELECTING]: COLORS.BLACK,
};

export const Wrapper = styled.div<{
  type: SeatType;
  status: SeatStatus;
}>`
  width: 35px;
  height: 30px;
  border-radius: 40%;
  border-color: ${({ type = SeatType.STANDARD }) => SeatStatusBorderColors[type]};
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
