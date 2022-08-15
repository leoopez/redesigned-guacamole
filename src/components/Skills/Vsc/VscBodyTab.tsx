import styled, { css } from "styled-components";
import { IStyleComponent } from "../../Generics/interface";
import { useVscTab } from "./context/useVsc";

interface IVscBodyTab extends IStyleComponent {
    text: string;
    number: number;
    selected?: boolean;
};

const VscBodyTab = ({ className, text, number }: IVscBodyTab) => {
    const { changeTab } = useVscTab()
    const onClick = () => {
        changeTab(number);
    }

    return <li className={className} onClick={onClick}>
            {text}
    </li>
}

export default styled(VscBodyTab)<any>(
    (props) => {
        return css`
            background-color: ${props.selected ? "#FDF7E2" : "transparent"};
            padding: 2rem 0.5rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            position: relative;

            ${props.selected && 
                `
                &::before {
                    content: "";
                    background: green   ;
                    position: absolute;
                    height: 0.5rem;
                    width: 110%;
                    top: 0;
                    left: -1rem;
                };
                `}
        `
    }
);