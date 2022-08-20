import styled, { css } from "styled-components";
import staticInfo from "../../../static/static.json";
import { useLanguage } from "../../../context/useLanguage";
import { useVscTab } from "./context/useVsc";
import { useTheme } from "../../../context/useTheme";
const { skills } = staticInfo;

export default  () => {
    const { lan } = useLanguage();
    const { tab } = useVscTab(); 

    return (
        <VscBodyContent>
            {skills[lan].items[tab].items.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </VscBodyContent>
    );
};

const VscBodyContent = styled.div<any>(
    (props) => {
        const { theme } = useTheme();

        return css`
            background-color: ${theme ? "#FDF7E2" : "#2A3136" };
            padding: 1rem;
            height: 89%;
            border-bottom-left-radius:  2rem;
            border-bottom-right-radius:  2rem;
        `}
)