import styled from "styled-components";
import { FaChrome } from "react-icons/fa"
import { IStyleComponent } from "../../Generics/interface";
import { useChromeTab } from "./context/useChromeTab";

import ChromeBodyItem from "./ChromeBodyItem";

export default () => {
    const { items } = useChromeTab();
    return (
        <ChromeBody>
            {items.map((item, i) => (
                <ChromeBodyItem key={i}>
                    {item}
                </ChromeBodyItem>
            ))}
        </ChromeBody>
    )
}

const ChromeBody = styled.ul`
    position: relative;
    padding: 2rem;
`;
