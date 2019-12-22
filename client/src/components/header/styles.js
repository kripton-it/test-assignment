import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 5px;
`;

Logo.displayName = 'Logo';

export const LogoLink = styled(Link)`
  color: inherit;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

LogoLink.displayName = 'LogoLink';

export const Navigation = styled.nav`
  color: #ffffff;
  font-size: 30px;
`;

Navigation.displayName = 'Navigation';

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
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