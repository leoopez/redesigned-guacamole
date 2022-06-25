import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import ChromeButtons from "./ChromeButtons";

import ChromeTapContainer from "./ChromeTabContainer";

const ChromeHeader = ({ className }: IStyleComponent) => {
    return (
        <div className={className}>
            <ChromeTapContainer />
            <ChromeButtons/>
        </div>
    )
}

export default styled(ChromeHeader)`
    border-top-left-radius	: 2rem;
    border-top-right-radius	: 2rem;
`;