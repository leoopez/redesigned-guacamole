import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { IStyleComponent } from './interface';
import { FaArrowUp } from 'react-icons/fa';

const BackTop = ({ className }: IStyleComponent) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');

    let observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setShow(!entry.isIntersecting)),
      {}
    );

    observer.observe(header);
  }, []);

  const onClick = (e: any) => {
    e.preventDefault();
    document.getElementById('root').scrollIntoView();
  };

  return show ? (
    <span className={className} onClick={onClick}>
      <FaArrowUp size="2rem" />
    </span>
  ) : null;
};

export default styled(BackTop)`
  display: flex;
  justify-container: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  position: fixed;
  cursor: pointer;
  top: 10%;
  right: 10%;
  justify-content: center;
  box-shadow: 0 0 3px 1px;
  border-radius: 50%;
`;
