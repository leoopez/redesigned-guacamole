import styled from "styled-components";
import { SiVisualstudiocode } from "react-icons/si";
import Icon from "../../Generics/Icon";
import { useVscTab } from "./context/useVsc";
import VscSideBarList from "./VscSideBarList";
import VscSideBarHeader from "./VscSideBarHeader";

export default () => {
    const { isOpen } = useVscTab();
    return (
        <VscHeader>
            <Icon Component={SiVisualstudiocode} size={"5rem"} color={"#1F9CF0"}/>
            <VscSideBarHeader/>
            {isOpen && <VscSideBarList />}
        </VscHeader>
    );
};

const VscHeader = styled.div`
    display: none;

    @media screen  and (min-width: 45em) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        flex-wrap: nowrap;
    }
`;