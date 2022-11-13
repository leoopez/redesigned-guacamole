import styled from 'styled-components';
import { IName } from './interfaces';

export default ({ className, name }: IName) => {
  return <NameComponent className={className}>{name}</NameComponent>;
};

const NameComponent = styled.span`
  color: #f08c00;
`;
