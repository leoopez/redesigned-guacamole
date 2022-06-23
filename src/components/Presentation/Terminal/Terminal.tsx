import styled from "styled-components";

import { IStyleComponent } from "../../Generics/interface";

import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";
  
const TerminalComponent = ({className}: IStyleComponent): JSX.Element  => {
    return (
        <div className={className}>
            <TerminalHeader />
            <TerminalBody />
        </div>
    )
}

export default styled(TerminalComponent)`
    font-family: 'Azeret Mono';
    width: min(95vw, 70rem);
    height: min(80vh, 50rem);
    background-color: #f8f9fa;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
`;
