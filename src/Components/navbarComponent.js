import React from 'react';
import CoreysFace from '../Assets/CoreysFace.jpeg';
import MainNavigation, {
  MainNavigationLogoLink,
  MainNavigationLink,
  MainNavigationItem,
  NavImg,
} from './mainStyles';

const NavbarComponent = () => {
  return (
    <>
      <MainNavigation>
        <MainNavigationLogoLink href="/">
          <NavImg src={CoreysFace} alt="Coreys face" />
        </MainNavigationLogoLink>
        <MainNavigationItem>
          <MainNavigationLink href="/form">
            <span>Register</span>
          </MainNavigationLink>
        </MainNavigationItem>
      </MainNavigation>
    </>
  );
};

export default NavbarComponent;
