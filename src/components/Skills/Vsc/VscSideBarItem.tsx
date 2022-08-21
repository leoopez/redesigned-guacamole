import styled from "styled-components";
import { SiNodedotjs } from "react-icons/si";
import { IStyleComponent } from "../../Generics/interface";

import Icon from "../../Generics/Icon";
import { useVscTab } from "./context/useVsc";

export default ({ text, number }: any) => {
    const { changeTab } = useVscTab();

    const onClick = () => {
        changeTab(number);
    }

    return (
        <VscSideBarItem onClick={onClick} className="pointer">
            <Icon Component={SiNodedotjs} size={"2.5rem"} color={"green"}/>
            <TextFixed>
                {text}
            </TextFixed>
        </VscSideBarItem>
    );
};

const VscSideBarItem = styled.li`
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
`;

const TextFixed = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`