import styled, { css } from 'styled-components';

const borderCircle = css`
  border-radius: 50%;
`;

const colorInherit = css`
  color: inherit;
`;

const padding1px = css`
  padding-top: 1px;
`;

const Heading = styled.h2`
  margin: 1rem 0;
  font-weight: 800;
  letter-spacing: -0.05rem;
  
  ${({ size }) => {
    switch(size) {
      case '2xl': {
        return `
          font-size: 2.5rem;
          line-height: 1.2;
        `;
      }
      case 'xl': {
        return `
          font-size: 2rem;
          line-height: 1.3;
        `;
      }
      case 'lg': {
        return `
          font-size: 1.5rem;
          line-height: 1.4;
        `;
      }
      case 'md': {
        return `
          font-size: 1.2rem;
          line-height: 1.5;
        `;
      }
    }
  }}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;

const LightText = styled.p`
  color: #999;
`;

export {
  borderCircle,
  colorInherit,
  padding1px,
  Heading,
  List,
  ListItem,
  LightText,
};
