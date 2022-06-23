import { ISection } from "./interface";
import styled from "styled-components";

function Section({ className, id, children}: ISection ): JSX.Element  {
    return (
        <section id={id} className={className}>
            {children}
        </section>
    )
};

const StyleSection = styled(Section)`
    max-width: 100rem;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default StyleSection;