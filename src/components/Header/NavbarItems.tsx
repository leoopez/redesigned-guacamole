import styled from "styled-components";
import { IStyleComponent } from "../Generics/interface";
import { useLanguage } from "../../context/useLanguage";

import staticInfo from "../../../src/static/static.json";

const { navigation } = staticInfo;

interface ItemStyle extends IStyleComponent {
    item: string;
}

const NavbarItems = ({ className }: IStyleComponent) => {
    const { lan } = useLanguage();

    return (
        <ul className={className}>
            {navigation[lan].map((item: any, i: number) => {
                return (
                    <Item key={i} item={item} />
                )
            })}
        </ul>
    )
};


const Item = ({ className, item}: ItemStyle ) => {
    const scrollIntoView = (e: any) => {
        e.preventDefault();
        document.getElementById(item).scrollIntoView();
    };

    return (
        <li className={className} onClick={scrollIntoView}>
            {item}
        </li>
    )
};

export default styled(NavbarItems)`
    display: none;
    font-size: 2rem;
    font-weight: 500;

    @media screen  and (min-width: 45em) {
        display: flex;
        gap: 1rem;
    }
`;