import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 15px;
  color: #ffffff;
`;

FooterContainer.displayName = 'FooterContainer';

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
`;

MenuList.displayName = 'MenuList';

export const MenuItem = styled.li`
  padding-left: 25px;
  padding-right: 25px;
`;

MenuItem.displayName = 'MenuItem';

export const MenuLink = styled.a`
  color: inherit;

  &:hover {
    color: yellow;
  }
`;

MenuLink.displayName = 'MenuLink';

export const Copyright = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;

Copyright.displayName = 'Copyright';