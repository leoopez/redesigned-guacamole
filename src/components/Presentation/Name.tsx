import styled from "styled-components";
import { IName } from "./interfaces";
  
const NameComponent = ({ className, name }: IName) => {
    return (
      <span className={className}>{name}</span>
    )
};
  
export default styled(NameComponent)`
    color: #f08c00;
`;
  