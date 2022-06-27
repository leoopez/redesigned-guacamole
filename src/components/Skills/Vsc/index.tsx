import styled from "styled-components";

import { IStyleComponent } from "../../Generics/interface";
import VscBody from "./VscBody";
import VscHeader from "./VscHeader";

const Chrome = ({ className } : IStyleComponent) => {
    return (
        <div className={className}>
            <VscHeader />
            <VscBody />
        </div>
    );
};

export default styled(Chrome)`
    display: flex;  
    width: min(95vw, 70rem);
    height: min(80vh, 50rem);
    background: #EEE8D5;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
    position: relative;
    font-size: 1.4rem;
    font-weight: 500;
`;
    // background: #FDF7E2;