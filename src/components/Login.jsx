import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <Logo />
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img
            src="images/login-hero.svg"
            alt="people sharing a desk working"
          />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="Login using Google" />
            <p> Sign in with Google </p>
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      width: 70px;
      height: auto;
      padding: 10px 10px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  @media (max-width: 768px) {
    margin-right: 10px;
  }
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
    color: #0a66c2;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 90vw;
  align-items: center;

  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    padding-top: 5px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0px;
    width: 55%;
    font-size: 50px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    margin: auto;
    width: 50%;
    height: auto;
    position: absolute;
    top: 10vh;
    right: 0.5vw;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 1px rgb(0 0 0 / 0%),
    inset 0 0 0 2px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  margin: auto;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.2);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
