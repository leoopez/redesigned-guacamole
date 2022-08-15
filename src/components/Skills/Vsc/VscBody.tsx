import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";
import VscBodyTabs from "./VscBodyTabs";
import VscBodyContent from "./VscBodyContent";

const VscBody = ({ className }: IStyleComponent) => {
    return (
        <div className={className}>
            <VscBodyTabs />
            <VscBodyContent />
        </div>
    )
}

export default styled(VscBody)`
    padding: 1rem;
    height: 100%;
    `;
