import styled, { css } from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useChromeTab } from "./context/useChromeTab";

const ChromeTab = ({ className, children, nTab }: any ) => {
    const { changeTab } = useChromeTab();

    return (
        <li className={className} onClick={() => changeTab(nTab)}>
            {children}
        </li>
    )
}

export default styled(ChromeTab)<any>(
    (props) => {
        return css`
            background-color: ${props.selected ? "#ffffff" : "transparent"};
            padding: 1rem;
            border-radius: 0.5rem;
            position: relative;
            text-overflow: ellipsis;
            overflow: hidden;

            @media screen  and (min-width: 45em) {
                max-width: 110rem;
                padding: 2rem;
            }
        `
    }
)