import styled from "styled-components";

import React from "react";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo />
        <Search>
          <SearchIcon src="/images/search-icon.svg" alt="Search Magnifier"/>
          <SearchInput type='text' placeholder='Search'/>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="/feed" class='active'>
              <img src="/images/nav-home.svg" alt="" />
            </a>
            </NavList>
            <NavList>
              <a href="/network" >
              <img src="/images/nav-network.svg" alt="" />
            </a>
            </NavList>
            <NavList>
              <a href="/jobs">
              <img src="/images/nav-jobs.svg" alt="" />
            </a>
            </NavList>
            <NavList>
              <a href="/messages" >
              <img src="/images/nav-messaging.svg" alt="" />
            </a>
            </NavList>
            <NavList>
              <a href="/notifications" >
              <img src="/images/nav-notifications.svg" alt="" />
            </a>
            </NavList>
            <NavList>
              <a href="/profile" >
              <UserAvatar/>
            </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 1vh 2vw;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 0;
  max-width: 1128px;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2.5vh 0;
`;

const SearchIcon = styled.img`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: auto;
`;

const SearchInput = styled.input`
  @media (max-width: 520px) {
    display: none;
  }
`;

const Nav = styled.nav``;

const NavListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  width: 70vw;
`;

const NavList = styled.li`
  
`;

const SignOut = styled.div``;

const User = styled(NavList)``;

const Work = styled(User)``;

export default Header;
