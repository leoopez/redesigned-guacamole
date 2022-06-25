import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

const ChromeBodyItem = ({ className, children }: IStyleComponent) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
};

export default styled(ChromeBodyItem)`
`;