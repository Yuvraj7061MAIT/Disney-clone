import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            For a true hero isn’t measured by the size of his strength, but by
            the strength of his heart.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  width: 100%;
  margin-bottom: 2vw;
  padding: 0 20px;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
  display: block;
`;

const SignUp = styled.a`
  font-weight: bold;
  font-size: 18px;
  background-color: #6439ff;
  margin-bottom: 12px;
  color: #f9f9f9;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 25px;
  padding: 16.5px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: white !important;
    color: #6439ff;
    transition: background-color 0.3s ease;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 24px;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
