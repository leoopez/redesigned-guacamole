import styled from "styled-components";

import Presentation from "./Presentation/index";

const Body = styled.div`
  background-color: #f1f3f5;
`;


const App: React.FC = () => {
  return (
    <Body>
      <Presentation />
    </Body>
  )
};

export default App;
