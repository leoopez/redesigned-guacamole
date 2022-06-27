import styled from "styled-components";
import { SiVisualstudiocode } from "react-icons/si";
import { IStyleComponent } from "../../Generics/interface";
import Icon from "../../Generics/Icon";
import { useVscTab } from "./context/useVsc";
import VscSideBarList from "./VscSideBarList";
import VscSideBarHeader from "./VscSideBarHeader";

const VscHeader = ({ className }: IStyleComponent) => {
    const { isOpen } = useVscTab();
    return (
        <div className={className}>
            <Icon Component={SiVisualstudiocode} size={"5rem"} color={"#1F9CF0"}/>
            <VscSideBarHeader />
            {isOpen && <VscSideBarList />}
        </div>
    );
};

export default styled(VscHeader)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    width: 35%;
`;