import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/useTheme";
import { IStyleComponent } from "../Generics/interface";

import NavbarItems from "./NavbarItems";
import NavbarItemsResponsive from "./NavbarItemsResponsive";
import NavbarOptions from "./NavbarOptions";

export default ({ className }: IStyleComponent) => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    return (
        <Header className={className}>
            <span style={{ fontSize:" 3rem", fontWeight: 800 }}>
                LO.
            </span>
            <NavbarItems />
                <NavbarItemsResponsive setIsOpen={setIsOpen} open={isOpen} />
            <NavbarOptions setIsOpen={setIsOpen} open={isOpen}/>
        </Header>
    )
};

const Header = styled.nav`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`;