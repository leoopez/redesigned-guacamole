import styled, { css } from "styled-components";
import { useTheme } from "../../context/useTheme";
import Navbar from "./Navbar";

export default  () => {
    return (
        <Header id="header">
            <Navbar />
        </Header>
    )
};

const Header = styled.header<any>(
    (props) => {
      const { theme } = useTheme();
  
        return css`
            position relative;
            z-index: 10000;
            display: flex;
            width: 100%;
            justify-content: center;
            height: 8rem;
        `;
    }
);
