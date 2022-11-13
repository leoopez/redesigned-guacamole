import styled, { css } from 'styled-components';
import { useTheme } from '../../../context/useTheme';

import VscBody from './VscBody';
import VscHeader from './VscHeader';

export default () => {
  return (
    <Chrome>
      <VscHeader />
      <VscBody />
    </Chrome>
  );
};

const Chrome = styled.div<any>((props) => {
  const { theme } = useTheme();
  return css`
    width: min(95vw, 80rem);
    height: min(80vh, 50rem);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 17px 10px 0px;
    position: relative;
    background: ${theme ? '#EEE8D5' : '#000'};

    @media screen and (min-width: 45em) {
      display: flex;
    }
  `;
});
