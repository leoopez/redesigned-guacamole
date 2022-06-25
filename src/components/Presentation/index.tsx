import staticInfo  from "../../static/static.json";
import { useLanguage } from "../../context/useLanguage";

import Section from "../Generics/Section";

import Terminal from "./Terminal/Terminal";
import Name from "./Name";

export default (): JSX.Element => {
  const { lan } = useLanguage();

  const { presentation } = staticInfo;
  const { title } = presentation[lan]
  const { name } = presentation;
  
  return (
    <Section id="presentation">
      <h1>
        {title}
        <Name name={name} />
      </h1>
      <Terminal />
    </Section>
  );
}
