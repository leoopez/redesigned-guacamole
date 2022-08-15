import styled from "styled-components";
import { IStyleComponent } from "../Generics/interface";

import { FaSun, FaLanguage, FaMoon, FaBars } from "react-icons/fa";

const NabvarOptions = ({ className, setIsOpen }: any) => {
    return (
        <ul className={className}>
            <FaLanguage size={"3rem"}/>
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
