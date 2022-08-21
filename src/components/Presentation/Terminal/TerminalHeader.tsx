import styled, { css } from "styled-components";
import { useTheme } from "../../../context/useTheme";

export default () => {
    const t1Style = {
        color: "red",
        fontSize: "4.5rem",
    };
    
    const t2Style = {
        color: "#F5BB3B",
        fontSize: "4.5rem" 
    };
    
    const t3Style = {
        color: "green",
        fontSize: "4.5rem" 
    };
  
    return (
        <TerminalHeaderComponent>
            <span className='th-1' style={t1Style}>&#9679;</span>
            <span className='th-2' style={t2Style}>&#9679;</span>
            <span className='th-3' style={t3Style}>&#9679;</span>
        </TerminalHeaderComponent>
    )
}

const TerminalHeaderComponent = styled.div(
    (props) => {
        const { theme } = useTheme();
        return css`
            background-color: ${theme ? "#EBEBEB" : "#3C3C3A" };
            border-bottom: 1px solid rgb(212,212,212);
            border-top-left-radius	: 2rem;
            border-top-right-radius	: 2rem;
            padding: 1rem;
        `;
    }
);
