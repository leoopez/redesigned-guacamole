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
                <ArrowLeft color={tab === 0 ? "gray" : "black"}/>
            </button>
            <button disabled={tab === tabs - 1 } onClick={() => changeTab(tab + 1)}>
                <ArrowRight color={tab === tabs - 1 ? "gray" : "black"} />
            </button>
        </div>
    )
}

export default styled(ChromeButtons)`
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
`;

const ArrowLeft = styled(FiArrowLeft)<IArrow>(
    ({ color }) => `
        color: ${ color };
    `
);


const ArrowRight = styled(FiArrowRight)<IArrow>(
    ({ color }) => `
        color: ${ color };
    `
);