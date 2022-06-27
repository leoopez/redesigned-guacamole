import styled, { css } from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

interface IVscBodyContent extends IStyleComponent {

};

const VscBodyContent = ({ className }: IVscBodyContent) => {
    return <li className={className}>
            
    </li>
}


export default styled(VscBodyContent)`
    background: #FDF7E2;
    height: 80%;

`