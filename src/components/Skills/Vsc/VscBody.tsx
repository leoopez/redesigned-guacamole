import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";
import VscBodyTabs from "./VscBodyTabs";
import VscBodyContent from "./VscBodyContent";

const VscBody = ({ className }: IStyleComponent) => {
    const { tabs } = useVscTab()
    return (
        <div className={className}>
            <VscBodyTabs />
            {tabs.length > 0 && <VscBodyContent />}
        </div>
    )
}

export default styled(VscBody)`
    width: 65%;
    padding: 1rem;
`;
