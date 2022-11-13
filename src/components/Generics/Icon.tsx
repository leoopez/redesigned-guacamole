import { IconType } from 'react-icons';
import styled from 'styled-components';

import { IStyleComponent } from './interface';

interface IIcon extends IStyleComponent {
  Component: IconType;
  color?: string;
  size?: string;
}

const Icon = ({ className, Component, color = 'black', size = '2.5rem' }: IIcon) => {
  return (
    <span className={className}>
      <Component size={size} color={color} />
    </span>
  );
};

export default styled(Icon)<IIcon>`
  display: flex;
  align-items: center;
`;
