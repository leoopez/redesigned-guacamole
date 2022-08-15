import staticInfo  from "../../static/static.json";
import { useLanguage } from "../../context/useLanguage";

import Section from "../Generics/Section";
import Vsc from "./Vsc";
import TabProvider from "./Vsc/context/useVsc";

const { skills } = staticInfo;

export default (): JSX.Element => {
  const { lan } = useLanguage();
  const { title } = skills[lan]
  
  return (
    <Section id={title}>
      <h1>
        {title}
      </h1>
      <TabProvider>
        <Vsc /> 
      </TabProvider>
    </Section>
  );
}
