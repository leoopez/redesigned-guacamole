import staticInfo from '../../static/static.json';
import { useLanguage } from '../../context/useLanguage';

import Section from '../Generics/Section';
import Contact from './Contact';

const { contact } = staticInfo;

export default (): JSX.Element => {
  const { lan } = useLanguage();
  const { title } = contact[lan];

  return (
    <Section id={title}>
      <h1>{title}</h1>
      <Contact />
    </Section>
  );
};
