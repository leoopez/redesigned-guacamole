import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";
import VscBodyTab from "./VscBodyTab";

const VscBodyTabs = ({ className }: IStyleComponent) => {
    const { tab, tabs } = useVscTab(); 

    return <ul className={className}>
        {tabs.map((text, i) => <VscBodyTab key={i} text={text} selected={tab === text} />) }
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