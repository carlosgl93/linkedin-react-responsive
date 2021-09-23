import styled from "styled-components";

import React from "react";

const Logo = () => {
  return (
    <LinkedinLogo href='/'>
        <img src="/images/login-logo.svg" alt="Linkedin Logo SVG" />
    </LinkedinLogo>
  );
};

const LinkedinLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 25vw;
  }

`

export default Logo;
