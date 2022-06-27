import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Icon from "../../Generics/Icon";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";

const VscSideBarHeader = ({ className }: IStyleComponent) => {
    const { open, isOpen } = useVscTab();

    return (
        <div className={className}>
                <button onClick={open}>
                    {isOpen ?  <Icon Component={IoIosArrowForward}/> : <Icon Component={IoIosArrowDown}/>}
                </button>
                <span onClick={open}>
                    PORTFOLIO [WSL]
                </span>
        </div>
    )
}

export default styled(VscSideBarHeader)`
    display: flex;
    align-items: center;
`