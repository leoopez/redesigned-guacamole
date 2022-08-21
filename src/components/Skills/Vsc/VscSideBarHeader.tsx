import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Icon from "../../Generics/Icon";
import { useVscTab } from "./context/useVsc";

export default () => {
    const { open, isOpen } = useVscTab();

    return (
        <VscSideBarHeader className="pointer">
                <button onClick={open}>
                    {isOpen ?  <Icon Component={IoIosArrowDown}/> : <Icon Component={IoIosArrowForward}/>}
                </button>
                <span onClick={open}>
                    PORTFOLIO [WSL]
                </span>
        </VscSideBarHeader>
    )
}

const VscSideBarHeader = styled.div`
    display: flex;
    align-items: center;
`