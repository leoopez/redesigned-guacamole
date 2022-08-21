import styled from "styled-components";
import { IStyleComponent } from "../Generics/interface";
import { useLanguage } from "../../context/useLanguage";

import staticInfo from "../../../src/static/static.json";

const { navigation } = staticInfo;

interface ItemStyle extends IStyleComponent {
    item: string;
}

export default () => {
    const { lan } = useLanguage();

    return (
        <NavbarItems>
            {navigation[lan].map((item: any, i: number) => {
                return (
                    <Item key={i} item={item} />
                )
            })}
        </NavbarItems>
    )
};


const Item = ({  item }: any ) => {
    const scrollIntoView = (e: any) => {
        e.preventDefault();
        document.getElementById(item).scrollIntoView();
    };

    return (
        <li className="pointer" onClick={scrollIntoView}>
            {item}
        </li>
    )
};

const NavbarItems = styled.ul`
    display: none;
    font-size: 2rem;
    font-weight: 500;

    @media screen  and (min-width: 45em) {
        display: flex;
        gap: 1rem;
    }
`;