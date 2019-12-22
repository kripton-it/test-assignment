import React from 'react';

import * as Styles from './styles';

const Footer = () => {
  return (
    <Styles.FooterContainer>
      <Styles.MenuList>
        <Styles.MenuItem>
          <Styles.MenuLink href="#">
            About
          </Styles.MenuLink>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.MenuLink href="#">
            Privacy
          </Styles.MenuLink>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.MenuLink href="#">
            Delivery
          </Styles.MenuLink>
        </Styles.MenuItem>
      </Styles.MenuList>
      <Styles.Copyright>
        &#169; Read.us, 2020
      </Styles.Copyright>
    </Styles.FooterContainer>
  );
};

export default Footer;