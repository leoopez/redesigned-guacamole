import styled, { css } from 'styled-components';

import Header from './Header';
import Presentation from './Presentation/index';
import Technologies from './Technologies';
import Skills from './Skills';
import BackTop from './Generics/BackTop';
import Contact from './Contact';
import { useTheme } from '../context/useTheme';

export default () => {
  return (
    <Body>
      <Header />
      <Presentation />
      <Technologies />
      <Skills />
      <Contact />
      <BackTop />
    </Body>
  );
};

const Body = styled.div<any>((props) => {
  const { theme } = useTheme();

  return css`
    width: 100%;
    font-size: 1.6rem;
    background-color: ${theme ? '#f1f3f5' : '#313335'};
    color: ${theme ? '#313335' : '#f1f3f5'};
  `;
});
