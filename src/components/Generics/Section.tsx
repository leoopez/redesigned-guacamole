import { ISection } from './interface';
import styled from 'styled-components';

function Section({ className, id, children }: ISection): JSX.Element {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

const StyleSection = styled(Section)`
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: 45em) {
    max-width: 110rem;
    font-size: 1.8rem;
  }
`;

export default StyleSection;
