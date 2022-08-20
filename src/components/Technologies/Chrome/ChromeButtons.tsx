import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { FiArrowRight, FiArrowLeft} from "react-icons/fi";
import { useChromeTab } from "./context/useChromeTab";

interface IArrow {
    color: string;
};

const ChromeButtons = ({ className }: IStyleComponent) => {
    const { tab, tabs, changeTab } = useChromeTab(); 

    return (
        <div className={className}>
            <button disabled={tab === 0} onClick={() => changeTab(tab - 1)}>
                <FiArrowLeft opacity={tab === 0 ?  0.33 : 1 }/>
            </button>
            <button disabled={tab === tabs - 1 } onClick={() => changeTab(tab + 1)}>
                <FiArrowRight opacity={tab === tabs - 1 ?   0.33 : 1 } />
            </button>
        </div>
    )
}

export default styled(ChromeButtons)`
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
`;
