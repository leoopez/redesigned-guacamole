import styled, { css } from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import staticInfo from "../../../static/static.json";
import { useLanguage } from "../../../context/useLanguage";
import { useVscTab } from "./context/useVsc";
const { skills } = staticInfo;

interface IVscBodyContent extends IStyleComponent {

};

const VscBodyContent = ({ className }: IVscBodyContent) => {
    const { lan } = useLanguage();
    const { tab } = useVscTab(); 

    return <div className={className}>
            {skills[lan].items[tab].items.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
    </div>
}


export default styled(VscBodyContent)`
    height: 89%;
    border-bottom-left-radius:  2rem;
    border-bottom-right-radius:  2rem;
    background: #FDF7E2; 
`