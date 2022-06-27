import styled from "styled-components";
import { SiNodedotjs } from "react-icons/si";
import { IStyleComponent } from "../../Generics/interface";

import Icon from "../../Generics/Icon";
import { useVscTab } from "./context/useVsc";

export interface IVscSideBarItem extends IStyleComponent  {
    text: string;
}

const VscSideBarItem = ({ className, text }: IVscSideBarItem) => {
    const { addTabs } = useVscTab();

    const onClick = () => {
        addTabs(text);
    }

    return (
        <li className={className} onClick={onClick}>
            <Icon Component={SiNodedotjs} size={"2.5rem"} color={"green"}/>
            <TextFixed>
                {text}
            </TextFixed>
        </li>
    );
};

export default styled(VscSideBarItem)`
    display: flex;
    gap: 0.5rem;
`;

const TextFixed = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`