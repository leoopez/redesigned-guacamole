import styled from "styled-components";
import { FiArrowRight, FiArrowLeft} from "react-icons/fi";
import { useChromeTab } from "./context/useChromeTab";

export default () => {
    const { tab, tabs, changeTab } = useChromeTab(); 

    return (
        <ChromeButtons>
            <button disabled={tab === 0} onClick={() => changeTab(tab - 1)} className={tab === 0 ? "" : "pointer" }>
                <FiArrowLeft opacity={tab === 0 ?  0.33 : 1 }/>
            </button>
            <button disabled={tab === tabs - 1 } onClick={() => changeTab(tab + 1)} className={tab === tabs - 1 ? "" : "pointer" }>
                <FiArrowRight opacity={tab === tabs - 1 ?   0.33 : 1 } />
            </button>
        </ChromeButtons>
    )
}

const ChromeButtons = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
`;
