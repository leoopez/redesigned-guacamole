import styled from "styled-components";
import { IStyleComponent } from "../Generics/interface";
import Navbar from "./Navbar";

const Header = ({ className }: IStyleComponent) => {
    return (
        <header className={className}>
            <Navbar />
        </header>
    )
};

export default styled(Header)`
    position relative;
    display: flex;
    width: 100%;
    justify-content: center;
    height: 12rem;
`;