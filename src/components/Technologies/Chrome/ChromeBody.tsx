import styled from "styled-components";
import { FaChrome } from "react-icons/fa"
import { IStyleComponent } from "../../Generics/interface";
import { useChromeTab } from "./context/useChromeTab";

import ChromeBodyItem from "./ChromeBodyItem";

const ChromeBody = ({ className }: IStyleComponent) => {
    const { items } = useChromeTab();
    return (
        <ul className={className}>
            {items.map((item, i) => (
                <ChromeBodyItem key={i}>
                    {item}
                </ChromeBodyItem>
            ))}
        </ul>
    )
}

export default styled(ChromeBody)`
    position: relative;
    padding: 2rem;
`;
