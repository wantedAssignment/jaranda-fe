import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 70px;
`;

export const StyledLink = styled(Link)`
  > span {
    font-weight: bold;
    display: inline-block;
    margin: 0 30px;
  }
  color: ${({ active }) => (active ? '#AAC14F' : '#000')};
`;
