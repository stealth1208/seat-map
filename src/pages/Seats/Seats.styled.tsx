import styled from 'styled-components';
import { COLORS } from '@Styles/variables';

export const Wrapper = styled.div`
  display: block;
  padding: 1rem 2rem;
`;

export const Rows = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const RowNames = styled.div`
  color: ${COLORS.WHITE};
  font-size: 1.8rem;
  margin-right: 1rem;
`;
