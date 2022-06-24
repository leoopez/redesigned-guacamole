import styled from "styled-components";

import Presentation from "./Presentation/index";
import Technologies from "./Technologies";
const Body = styled.div`
  background-color: #f1f3f5;
`;


const App: React.FC = () => {
  return (
    <Body>
      {/* <Presentation /> */}
      <Technologies />
    </Body>
  )
};

export default App;
