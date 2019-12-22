import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 15px;
  color: #ffffff;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.li`
  padding-left: 25px;
  padding-right: 25px;
`;

export const MenuLink = styled.a`
  color: inherit;

  &:hover {
    color: yellow;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;