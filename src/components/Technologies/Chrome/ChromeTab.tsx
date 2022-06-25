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
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            position: relative;

            ${props.selected && 
            `
            &::before,
            &::after {
                content: "";
                position: absolute;
                height: 10px;
                width: 20px;
                bottom: 10px;
            };
            
            &::after {
                right: -20px;
                border-radius: 0 0 0 10px;
                box-shadow: -10px 0 0 0 #fff;   
            };

            &::before {
                left: -20px;
                border-radius: 0 0 10px 0;
                box-shadow: 10px 0 0 0 #fff;
            };
            `}
        `
    }
)