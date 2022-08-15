import styled from "styled-components";

import Header from "./Header";
import Presentation from "./Presentation/index";
import Technologies from "./Technologies";
import Skills from "./Skills";
import BackTop from "./Generics/BackTop";

const Body = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  font-size: 1.6rem;
`;

const App: React.FC = () => {
  return (
    <Body>
      <Header />
      <Presentation />
      <Technologies />
      <Skills />
      <BackTop />
    </Body>
  )
};

export default App;
