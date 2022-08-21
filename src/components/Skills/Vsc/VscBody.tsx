import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";
import VscBodyTabs from "./VscBodyTabs";
import VscBodyContent from "./VscBodyContent";

export default () => {
    return (
        <VscBody>
            <VscBodyTabs />
            <VscBodyContent />
        </VscBody>
    )
}

const VscBody = styled.div`
    padding: 1rem;
    height: 100%;
`;
