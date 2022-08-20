import styled, { css } from "styled-components";

import staticInfo from "../../../static/static.json";

import { useLanguage } from "../../../context/useLanguage";
import ChromeTab from "./ChromeTab";
import { useChromeTab } from "./context/useChromeTab";
import { useTheme } from "../../../context/useTheme";

const { technologies } = staticInfo;
const { subjects } = technologies; 

export default () => {
    const { lan } = useLanguage();
    const { tab } = useChromeTab();

    return (
        <ChromeHeaderContainer>
            {subjects.map((item: any, i: number) => {
                return (
                    <ChromeTab key={i} nTab={i} selected={tab === i}>
                        {item[lan].key}
                    </ChromeTab>
                )
            })}
        </ChromeHeaderContainer>
    );
};

const ChromeHeaderContainer =  styled.ul<any>(
    (props) => {
        const { theme } = useTheme();
        return css`
            display: flex;
            padding-left: 1rem;
            flex-wrap: wrap;
            background: ${theme ? "#FFFFFF" : "#000" };

            @media screen  and (min-width: 45em) {
                flex-wrap: nowrap;
                box-shadow:inset 0px -1rem 0px 0px ${theme ? "#FFFFFF" : "#000" };
            }
        `;
    }
);