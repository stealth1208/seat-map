import styled from 'styled-components';
import { COLORS } from '@Styles/variables';

export const Wrapper = styled.div`
  display: flex;
  padding: 8rem 0 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

export const Rows = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: center;
`;

export const RowNames = styled.div`
  color: ${COLORS.WHITE};
  font-size: 1.8rem;
  margin-right: 2rem;
  width: 2rem;
  height: 2rem;
`;
