import styled from "styled-components";

import Header from "./Header";
import Presentation from "./Presentation/index";
import Technologies from "./Technologies";
import Skills from "./Skills";
import BackTop from "./Generics/BackTop";
import LanguageProvider from "../context/useLanguage";

const Body = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  font-size: 1.6rem;
`;

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Body>
        <Header />
        <Presentation />
        <Technologies />
        <Skills />
        <BackTop />
      </Body>
    </LanguageProvider>
  )
};

export default App;
