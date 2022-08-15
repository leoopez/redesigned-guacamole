import styled, { css } from "styled-components";
import { IStyleComponent } from "../Generics/interface";
import { useLanguage } from "../../context/useLanguage";
import { FaTimes } from "react-icons/fa";

import staticInfo from "../../../src/static/static.json";

interface ItemStyle extends IStyleComponent {
    item: string;
}

const { navigation } = staticInfo;

const NavbarItems = ({ className, setIsOpen, open }: any) => {
    const { lan } = useLanguage();

    return (
        <ul className={className}>
            <StyledCloseIcon setIsOpen={setIsOpen}/>
            {navigation[lan].map((item: any, i: number) => {
                return (
                    <StyledItem key={i} item={item}>
                        {item}
                    </StyledItem>
                )
            })}
        </ul>
    )
};

export default styled(NavbarItems)<any>(
    (props) => {
        return css`
    display: flex;
    align-items: center;
    background-color: #f8f9fa;
    justify-content:center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    flex-direction: column;
    left: -110%;
    transition: left 250ms;
    z-index: 100;
    gap: 1rem;
    ${props.open && `left: 0;`}

    @media screen  and (min-width: 45em) {
        gap: 1rem;
        display: none;
    }
`});

const Item = ({ className, item }: ItemStyle ) => {
    return (
        <li className={className}>
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