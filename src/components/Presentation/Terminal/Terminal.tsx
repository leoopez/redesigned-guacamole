import styled, { css } from "styled-components";
import { useTheme } from "../../../context/useTheme";

import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";
  
export default (): JSX.Element  => {        
    const { theme } = useTheme();

    return (
        <TerminalComponent _theme={theme}>
            <TerminalHeader />
            <TerminalBody />
        </TerminalComponent>
    )
}

const TerminalComponent = styled.div<any>(
    (props) => {
        return css`
            background: ${props._theme ? "#FFFFFF" : "#000" };
            font-family: 'Azeret Mono';
            width: min(95vw, 70rem);
            height: min(80vh, 50rem);
            border-radius: 2rem;
            box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
        `;
    }
)
//    background-color: #f8f9fa;
