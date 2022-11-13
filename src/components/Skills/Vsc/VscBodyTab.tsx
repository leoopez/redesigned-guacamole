import styled, { css } from 'styled-components';
import { useTheme } from '../../../context/useTheme';
import { useVscTab } from './context/useVsc';

export default ({ text, number }: any) => {
  const { changeTab } = useVscTab();
  const onClick = () => {
    changeTab(number);
  };

  return (
    <VscBodyTab onClick={onClick} className="pointer" number={number}>
      {text}
    </VscBodyTab>
  );
};

const VscBodyTab = styled.li<any>((props) => {
  const { theme } = useTheme();
  const { tab } = useVscTab();

  return css`
    background-color: ${props.number === tab
      ? theme
        ? '#FDF7E2'
        : '#2A3136'
      : theme
      ? '#EEE8D5'
      : '#000'};
    padding: 2rem 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;

    ${props.number === tab &&
    `
                &::before {
                    content: "";
                    background: green   ;
                    position: absolute;
                    height: 0.5rem;
                    width: 110%;
                    top: 0;
                    left: -1rem;
                };
                `}
  `;
});
