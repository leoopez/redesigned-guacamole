import styled, { css } from "styled-components";
import { useTheme } from "../../../context/useTheme";
import { useChromeTab } from "./context/useChromeTab";

export default ({ children, nTab }: any ) => {
    const { changeTab } = useChromeTab();

    return (
        <ChromeTab onClick={() => changeTab(nTab)} nTab={nTab} className="pointer">
            {children}
        </ChromeTab>
    )
}

const ChromeTab =  styled.li<any>(
    (props) => {
        const { theme } = useTheme();
        const { tab } = useChromeTab();

        return css`
            background-color: ${props.nTab === tab ? (theme ? "#DEE1E6" : "#2A3136") : "2A3136"};
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