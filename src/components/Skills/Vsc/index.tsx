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
    width: min(95vw, 90rem);
    height: min(80vh, 50rem);
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
    position: relative;
    
    @media screen  and (min-width: 45em) {
        display: flex;
    }
`;
    // background: #FDF7E2;
    // background: #EEE8D5;
