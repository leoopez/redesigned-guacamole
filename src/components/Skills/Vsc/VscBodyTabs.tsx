import styled from "styled-components";
import { useLanguage } from "../../../context/useLanguage";
import staticInfo from "../../../static/static.json";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";
import VscBodyTab from "./VscBodyTab";

const { skills } = staticInfo;

const VscBodyTabs = ({ className }: IStyleComponent) => {
    const { tab } = useVscTab(); 
    const { lan } = useLanguage();
    const { items } = skills[lan];

    return <ul className={className}>
        {items.map((item, i) => <VscBodyTab key={i} text={item.key} selected={tab === i} number={i}/>) }
    </ul>
}

export default styled(VscBodyTabs)`
    display: flex;
    flex-wrap: nowrap;
    height: 5rem;

    & > li {
        flex: 1 auto 0;
    }
`