import styled from "styled-components";
import { useLanguage } from "../../../context/useLanguage";
import { IStyleComponent } from "../../Generics/interface";
import VscSideBarItem from "./VscSideBarItem";

import staticInfo from "../../../static/static.json";
const { skills } = staticInfo;

export default () => {
    const { lan } = useLanguage();
    const { items } = skills[lan];
    return (
        <VscSideBarList>
            {items.map((item, i) => <VscSideBarItem key={i} text={item.key} number={i}/>)}
        </VscSideBarList>
    )
}

const VscSideBarList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 2.5rem;
`;