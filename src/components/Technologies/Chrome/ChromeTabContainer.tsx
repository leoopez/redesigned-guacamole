import { useState } from "react";
import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

import staticInfo from "../../../static/static.json";

import { useLanguage } from "../../../context/useLanguage";
import ChromeTab from "./ChromeTab";
import { useChromeTab } from "./context/useChromeTab";

const { technologies } = staticInfo;
const { subjects } = technologies; 

const ChromeHeaderContainer = ({ className }: IStyleComponent) => {
    const { lan } = useLanguage();
    const { tab } = useChromeTab();

    return (
        <ul className={className}>
            {subjects.map((item: any, i: number) => {
                return (
                    <ChromeTab key={i} nTab={i} selected={tab === i}>
                        {item[lan].key}
                    </ChromeTab>
                )
            })}
        </ul>
    );
};

export default styled(ChromeHeaderContainer)`
    box-shadow:inset 0px -1rem 0px 0px #fff;
    background: rgb(238,238,238);
    display: flex;
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: 1rem;
`;