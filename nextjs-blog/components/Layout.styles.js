import styled from 'styled-components';
import { borderCircle, colorInherit } from '../styles/Utils.styles';

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.img`
  ${borderCircle}
  width: 6rem;
  height: 6rem;
`;

const HeaderHomeImage = styled.div`
  width: 8rem;
  height: 8rem;
`;

const HeadingLink = styled.a`
  ${colorInherit}
`;

const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

export {
  Container,
  Header,
  HeaderImage,
  HeaderHomeImage,
  HeadingLink,
  BackToHome,
};
