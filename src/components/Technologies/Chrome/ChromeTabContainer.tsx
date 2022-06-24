import { useState } from "react";
import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

import staticInfo from "../../../static.json";

import { useLanguage } from "../../../context/useLanguage";
import ChromeTab from "./ChromeTab";

const { technologies } = staticInfo;
const { subjects } = technologies; 

const ChromeHeaderContainer = ({ className }: IStyleComponent) => {
    const { lan } = useLanguage();
    const [selected, setSelected] = useState(0);

    return (
        <ul className={className}>
            {Object.keys(subjects).map((key: string, i: number) => {
                return (
                    <ChromeTab key={i} nTab={i} selected={selected === i} onClick={setSelected}>
                        {subjects[key as keyof typeof subjects][lan].key}
                    </ChromeTab>
                )
            })}
        </ul>
    )
}

export default styled(ChromeHeaderContainer)`
    display: flex;
    padding-left:1rem;
`;