import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

import ChromeTapContainer from "./ChromeTabContainer";

const ChromeHeader = ({ className }: IStyleComponent) => {
    return (
        <div className={className}>
            <ChromeTapContainer />
        </div>
    )
}

export default styled(ChromeHeader)`
    border-bottom: 1px solid rgb(212,212,212);
    background: rgb(238,238,238);
    border-top-left-radius	: 2rem;
    border-top-right-radius	: 2rem;
    box-shadow:inset 0px -1rem 0px 0px #fff;
`;