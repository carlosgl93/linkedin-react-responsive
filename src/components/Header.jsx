import styled from "styled-components";

import React from "react";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo />
        
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
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  max-width: 1128px;
`;

export default Header;
