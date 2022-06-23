import styled from "styled-components";
import { IStyleComponent } from "../../Generics/interface";

const TerminalHeaderComponent = ({ className }: IStyleComponent) => {
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
        <div className={className}>
            <div>
                <span className='th-1' style={t1Style}>&#9679;</span>
                <span className='th-2' style={t2Style}>&#9679;</span>
                <span className='th-3' style={t3Style}>&#9679;</span>
            </div>
        </div>
    )
}


export default styled(TerminalHeaderComponent)`
    border-bottom: 1px solid rgb(212,212,212);
    background: rgb(238,238,238);
    border-top-left-radius	: 2rem;
    border-top-right-radius	: 2rem;
    padding: 1rem;
`;
