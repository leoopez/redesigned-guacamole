import styled, { css, keyframes } from "styled-components";

import staticInfo  from "../../../static/static.json";
import { useLanguage } from "../../../context/useLanguage";
import { IStyleComponent } from "../../Generics/interface";

interface IPresentation {
    title: string;
    commands: string[];
}

interface ICommand {
    nCommand: number;
    steps: number;
    last: boolean;
}

const TerminalBodyComponent = ({ className }: IStyleComponent) => {
    const { lan } = useLanguage();

    const { presentation } = staticInfo;
    const { commands }: IPresentation = presentation[lan]
    
    return (
        <div className={className}>
            {commands.map((command: string, i: number) => (
                <Command key={i} nCommand={i} steps={command.length} last={commands.length-1 === i}>
                    $ {command}
                </Command>
                )
            )}
        </div>
    )
}

// Animations

const disapear = keyframes`
    0% {
        background-color: transparent;
    }
    
    1% {
        background-color: rgb(0,0,0);
    }

    99% {
        background-color: rgb(0,0,0);
    }

    100% {
        background-color: transparent;
    }
`
const typewriter =  keyframes`
    to {
        left: 100%;
    }
`;

const blink = keyframes`
    to {
        background-color: rgb(0,0,0);
    }
`
const stay = keyframes`
    to {
        background-color: transparent;
    }
`

const Command = styled.p<ICommand>(
    (props) => {
        const last = props.last ? 
            css`${blink} 750ms infinite ${1.5 + props.nCommand*1.5}s` : 
            css`${stay} ${1.5 + props.nCommand*1.5}s ${1.5 + props.nCommand*1.5}s`;
        
        return css`
            position: relative;
            width: max-content;
            font-weight: 400;
            color: black;
            
            &:before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: #f8f9fa;
                animation: 
                ${typewriter} 1s  steps(${props.steps}) forwards ${props.nCommand}s
            }
            &:after  {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                width: 1ch;
                height: 100%;
                animation:
                ${disapear} 1s forwards ${props.nCommand}s,
                ${typewriter} 1s steps(${props.steps}) forwards ${props.nCommand}s,
                ${last}
            `
        }
 );
            
            
export default styled(TerminalBodyComponent)`
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;
