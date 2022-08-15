import staticInfo  from "../../static/static.json";
import { useLanguage } from "../../context/useLanguage";

import Section from "../Generics/Section";
import Chrome from "./Chrome";

export default (): JSX.Element => {
  const { lan } = useLanguage();

  const { technologies } = staticInfo;
  const { title } = technologies[lan]
  
  return (
    <Section id={title}>
      <h1>
        {title}
      </h1>
      <Chrome />
    </Section>
  );
}
