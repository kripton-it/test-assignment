import React from 'react';

import * as Styles from './styles';

const Header = ({ location }) => {
  const { pathname } = location;
  const logo = pathname === "/"
    ? (
      <Styles.Logo>
        Read . us
      </Styles.Logo>
    ) : (
      <Styles.Logo>
        <Styles.LogoLink to="/">
          Read . us
        </Styles.LogoLink>
      </Styles.Logo>
    );
  const menu = (
    <Styles.MenuList>
      <Styles.MenuItem>
        <Styles.MenuLink href="#">
          New
            </Styles.MenuLink>
      </Styles.MenuItem>
      <Styles.MenuItem>
        <Styles.MenuLink href="#">
          Non-fiction
            </Styles.MenuLink>
      </Styles.MenuItem>
      <Styles.MenuItem>
        <Styles.MenuLink href="#">
          Children
            </Styles.MenuLink>
      </Styles.MenuItem>
      <Styles.MenuItem>
        <Styles.MenuLink href="#">
          Fiction
            </Styles.MenuLink>
      </Styles.MenuItem>
      <Styles.MenuItem>
        <Styles.MenuLink href="#">
          Education
            </Styles.MenuLink>
      </Styles.MenuItem>
    </Styles.MenuList>
  );
  return (
    <Styles.HeaderContainer>
      {logo}
      <Styles.Navigation>
        {menu}
      </Styles.Navigation>
    </Styles.HeaderContainer>
  );
};

export default Header;