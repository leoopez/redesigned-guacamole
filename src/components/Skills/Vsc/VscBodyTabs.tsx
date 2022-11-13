import styled from 'styled-components';
import { useLanguage } from '../../../context/useLanguage';
import staticInfo from '../../../static/static.json';
import VscBodyTab from './VscBodyTab';

const { skills } = staticInfo;

export default () => {
  const { lan } = useLanguage();
  const { items } = skills[lan];

  return (
    <VscBodyTabs>
      {items.map((item, i) => (
        <VscBodyTab key={i} text={item.key} number={i} />
      ))}
    </VscBodyTabs>
  );
};

const VscBodyTabs = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  height: 5rem;

  & > li {
    flex: 1 auto 0;
  }
`;
