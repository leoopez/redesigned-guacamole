import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

import staticInfo from "../../../static/static.json";
import { useLanguage } from "../../../context/useLanguage";

const { skills } = staticInfo;

const VSCTabs = ({ className } : IStyleComponent ) => {
    const { lan } = useLanguage();

    const { items } = skills[lan];
    return (
        <div className={className}>
            
        </div>
    )
}

export default styled(VSCTabs)`
`;