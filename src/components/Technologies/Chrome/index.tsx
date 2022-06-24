import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import ChromeBody from "./ChromeBody";
import ChromeHeader from "./ChromeHeader";

const Chrome = ({ className } : IStyleComponent) => {
    return (
        <div className={className}>
            <ChromeHeader />
            <ChromeBody />
        </div>
    )
}

export default styled(Chrome)`
    width: min(95vw, 70rem);
    height: min(80vh, 50rem);
    background-color: #f8f9fa;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
`;