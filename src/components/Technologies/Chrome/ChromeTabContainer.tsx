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
    display: flex;
    padding-left: 1rem;
    flex-wrap: wrap;

    @media screen  and (min-width: 45em) {
        flex-wrap: nowrap;
        box-shadow:inset 0px -1rem 0px 0px #fff;
    }
`;