import styled from "styled-components";

import Presentation from "./Presentation/index";
import Technologies from "./Technologies";
import Skills from "./Skills";

const Body = styled.div`
  background-color: #f1f3f5;
`;


const App: React.FC = () => {
  return (
    <Body>
      {/* <Presentation /> */}
      {/* <Technologies /> */}
      <Skills />
    </Body>
  )
};

export default App;
