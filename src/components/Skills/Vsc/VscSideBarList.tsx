import styled from "styled-components";
import { useLanguage } from "../../../context/useLanguage";
import { IStyleComponent } from "../../Generics/interface";
import VscSideBarItem from "./VscSideBarItem";

import staticInfo from "../../../static/static.json";
const { skills } = staticInfo;

const VscSideBarList = ({ className }: IStyleComponent ) => {
    const { lan } = useLanguage();
    const { items } = skills[lan];
    return (
        <ul className={className}>
            {items.map((item, i) => <VscSideBarItem key={i} text={item}/>)}
        </ul>
    )
}

export default styled(VscSideBarList)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 2.5rem;
`;