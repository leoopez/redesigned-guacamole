import styled, { css } from "styled-components";
import { useTheme } from "../../../context/useTheme";
import Github from "./Github";
import Gmail from "./Gmail";
import Linkedin from "./Linkedin";

export default  () => {
    return (
        <Contact>
            <Gmail />
            <Linkedin />
            <Github />
        </Contact>
    );
};

const Contact = styled.div<any>(
    (props) => {
        const { theme } = useTheme();
        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4rem;
            width: min(95vw, 80rem);
            height: min(80vh, 50rem);
            border-radius: 2rem;
            box-shadow: rgba(0,0,0,0.2) 0px 17px 10px 0px;
            position: relative;
            background: ${theme ? "#FFF" : "#000" };

            @media screen  and (min-width: 45em) {
                display: flex;
            }
        `;
    }
);
