import styled, { css } from "styled-components";
import { IStyleComponent } from "../Generics/interface";
import { useLanguage } from "../../context/useLanguage";
import { FaTimes } from "react-icons/fa";

import staticInfo from "../../../src/static/static.json";
import { useTheme } from "../../context/useTheme";

interface ItemStyle extends IStyleComponent {
    item: string;
    setIsOpen: (f: any) => any;
}

const { navigation } = staticInfo;

export default ({ setIsOpen, open }: any) => {
    const { lan } = useLanguage();

    return (
        <NavbarItems open={open}>
            <StyledCloseIcon setIsOpen={setIsOpen}/>
            {navigation[lan].map((item: any, i: number) => {
                return <StyledItem key={i} item={item} setIsOpen={setIsOpen}/>
            })}
        </NavbarItems>
    )
};

const NavbarItems = styled.ul<any>(
    (props) => {
        const { theme } = useTheme();
        return css`
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: -110%;
            transition: left 250ms;
            z-index: 100;
            gap: 1rem;
            ${props.open && `left: 0;`}

            background-color: ${theme ? "#f1f3f5" : "#313335"};
            color: ${theme ? "#313335" : "#f1f3f5"};
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            @media screen  and (min-width: 45em) {
                gap: 1rem;
                display: none;
            }
        `
    }
);

const Item = ({ className, item, setIsOpen}: ItemStyle ) => {
    const scrollIntoView = (e: any) => {
        e.preventDefault();
        document.getElementById(item).scrollIntoView();
        setIsOpen(false);
    };

    return (
        <li className={className} onClick={scrollIntoView}>
            {item}
        </li>
    )
};

const StyledItem = styled(Item)`
    margin-bottom: 2rem
`;

const CloseIcon = ({ className, setIsOpen }: any) => {
    return (
        <div className={className} onClick={() => setIsOpen(false)}>
            <FaTimes size={"3rem"}/>
        </div>
    )
}

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 5rem;
    right: 5rem;
`;