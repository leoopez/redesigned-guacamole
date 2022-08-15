import styled from "styled-components";
import { IStyleComponent } from "../Generics/interface";

import { FaSun, FaLanguage, FaMoon, FaBars } from "react-icons/fa";
import { useLanguage } from "../../context/useLanguage";

const NabvarOptions = ({ className, setIsOpen }: any) => {

    const { toggleLan } = useLanguage();
    
    return (
        <ul className={className} >
            <button onClick={() => toggleLan()}  >
                <FaLanguage size={"3rem"} />
            </button>
            <FaMoon size={"3rem"}/>
            <FaBarsResponsive>
                <FaBars size={"3rem"} onClick={() => setIsOpen(true)}/>
            </FaBarsResponsive>
        </ul>
    )
};

export default styled(NabvarOptions)`
    display: flex;
    gap: 1rem;
`;

const FaBarsResponsive = styled.div`
    @media screen  and (min-width: 45em) {
        display: none;
    }
`;
