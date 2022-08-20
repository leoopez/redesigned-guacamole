import styled, { css } from "styled-components";
import { useTheme } from "../../../context/useTheme";
import ChromeButtons from "./ChromeButtons";

import ChromeTapContainer from "./ChromeTabContainer";

export default () => {
    return (
        <ChromeHeader>
            <ChromeTapContainer />
            <ChromeButtons/>
        </ChromeHeader>
    )
}

const ChromeHeader = styled.div<any>(
    (props) => {
        const { theme } = useTheme();

        return css`
            background-color: ${theme ? "#DEE1E6" : "#2A3136"};
            border-top-left-radius	: 2rem;
            border-top-right-radius	: 2rem;
        `;
    }
);
