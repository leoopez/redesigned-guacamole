import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import staticInfo  from "../../../static/static.json";
import { useLanguage } from "../../../context/useLanguage";
import { useTheme } from "../../../context/useTheme";

interface IPresentation {
    title: string;
    commands: string[];
}

export default () => {
    const { lan } = useLanguage();

    const { presentation } = staticInfo;
    const { commands }: IPresentation = presentation[lan]
    const { theme } = useTheme();

    return (
        <TerminalBodyComponent>
            {commands.map((command: string, i: number) => (
                <Command key={i} nCommand={i} steps={command.length} last={commands.length-1 === i} _theme={theme}>
                    $ {command}
                </Command>
                )
            )}
        </TerminalBodyComponent>
    )
}

// Animations

const typewriter =  (_theme : any ) => keyframes`  
    0% {
        background-color: ${_theme ? "#FFF" : "#000" };
        left: 0%;
    }
    100% {
        background-color: ${_theme ? "#FFF" : "#000" };
        left: 100%;
    }
`;

const typewriter2 =  (_theme : any ) => keyframes`
    0% {
        background: ${_theme ? "#FFF" : "#000" };
        left: 0%;
    }

    1% {
        background: ${_theme ? "#000" : "#FFF" };
    }

    99% {
        background: ${_theme ? "#000" : "#FFF" };
    }

    100% {
        background: ${_theme ? "#FFF" : "#000" };
        left: 100%;
    }
`;

const blink = (_theme: any) => keyframes`
    0% {
        background: ${_theme ? "#FFF" : "#000" };
    }

    100% {
        background: ${_theme ? "#000" : "#FFF" };
    }
`

const Command = styled.p<any>(
    (props) => {
        return css`
            position: relative;
            width: max-content;
            font-weight: 400;
            width: max-content;

            &:before,
            &:after {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            &:before {
                background-color: ${props._theme ? "#FFF" : "#000" };
                animation: 
                    ${typewriter(props._theme)} 1s steps(${props.steps}) ${props.nCommand}s forwards;
            }
            &:after {
                width: 1ch;
                animation: 
                    ${typewriter2(props._theme)} 1s steps(${props.steps}) ${props.nCommand}s forwards,
                    ${blink(props._theme)} 750ms ${props.nCommand + 1}s ${ props.last ? "infinite" : "0" } forwards;
            }    
        `
    }
 );
            
const TerminalBodyComponent = styled.div<any>(
    (props) => {        
        return css`
            padding: 0.4rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        `;
    }
);

