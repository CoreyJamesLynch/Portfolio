import styled from 'styled-components';

const MainNavigation = styled.nav`
  align-items: center;
  background-color: #323232;
  display: flex;
  flex-flow: row nowrap;
  height: 56px;
  padding: 0 30px;
`;

const NavImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  margin: auto;
`;

const MainNavigationLogoLink = styled.a`
  display: flex;
  height: 100%;
  margin-right: 20px;
  transition: opacity 0.2s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const MainNavigationLink = styled.a`
  align-items: center;
  color: #999999;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 10px;
  text-decoration: none;
  &:hover {
    color: #dddddd;
  }
`;

const MainNavigationItem = styled.div`
  height: 100%;
`;

export default MainNavigation;
export {
  NavImg,
  MainNavigationLogoLink,
  MainNavigationLink,
  MainNavigationItem,
};
