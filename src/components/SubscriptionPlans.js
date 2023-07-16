import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { Typography, ThemeProvider, Button } from "@mui/material";
import BackgroundImage from "../assets/BackGround.png";
import logo from "../assets/logo.png";
import course from "../assets/course.png";
import time from "../assets/time.png";
import webminar from "../assets/webminar.png";
import scholarship from "../assets/scholarship.png";
import ads from "../assets/ads.png";
import down from "../assets/iconDown.png";
import search from "../assets/search.png";
import SubContainer from "./subContainer";
const SubscriptionPlans = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <NavBar>
          <LeftContent>
            <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
            <Course>
              <Typography variant="v4" style={{ color: "#000000", display: "flex", textAlign: "left", marginTop: "2.5px" }}>
                Courses
              </Typography>
              <Icon1 style={{ backgroundImage: `url(${down})` }}></Icon1>
            </Course>
            <Programs>
              <Typography variant="v4" style={{ color: "#000000", display: "flex", textAlign: "left", marginTop: "2.5px" }}>
                Programs
              </Typography>
              <Icon1 style={{ backgroundImage: `url(${down})` }}></Icon1>
            </Programs>
          </LeftContent>
          <RightContent>
            <SearchIcon style={{ backgroundImage: `url(${search})` }}></SearchIcon>
            <Login>
              <Typography variant="v4">Log in</Typography>
            </Login>
            <Button style={{ borderRadius: "42px", width: "166px", height: "40px", marginLeft: "64px", background: " linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)" }}>
              <Typography variant="v5" style={{ width: "82px", height: "19px", display: "flex", alignItems: "center", textAlign: "center", textTransform: "uppercase", color: "#FFFFFF" }}>
                join now{" "}
              </Typography>
            </Button>
          </RightContent>
        </NavBar>

        <Content style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <CourseDescription>
            <Access>
              <Typography variant="t1" style={{ color: "#FFFFFF" }}>
                Access curated courses worth
              </Typography>
            </Access>
            <Price>
              <Typography variant="t1" style={{ color: "#FFFFFF", textDecoration: "line-through red" }}>
                ₹ 18,500
              </Typography>
              <Typography variant="t1" style={{ color: "#FFFFFF" }}>
                at just
              </Typography>
              <Typography variant="t2" style={{ color: "#0096FF" }}>
                ₹ 99
              </Typography>
              <Typography variant="t1" style={{ color: "#FFFFFF" }}>
                per year!
              </Typography>
            </Price>
            <Pointer1>
              <Icon style={{ backgroundImage: `url(${course})`, backgroundRepeat: "no-repeat" }}></Icon>
              <TextContainer1>
                <Typography variant="h2" style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#0096FF", fontWeight: "600px" }}>100+</span> Job relevant courses
                </Typography>
              </TextContainer1>
            </Pointer1>
            <Pointer2>
              <Icon style={{ backgroundImage: `url(${time})`, backgroundRepeat: "no-repeat" }}></Icon>
              <TextContainer2>
                <Typography variant="h2" style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#0096FF", fontWeight: "600px" }}>20000+</span> Hours of content
                </Typography>
              </TextContainer2>
            </Pointer2>
            <Pointer3>
              <Icon style={{ backgroundImage: `url(${webminar})`, backgroundRepeat: "no-repeat" }}></Icon>
              <TextContainer3>
                <Typography variant="h2" style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#0096FF", fontWeight: "600px" }}>Exclusive</span> webinar access
                </Typography>
              </TextContainer3>
            </Pointer3>
            <Pointer4>
              <Icon style={{ backgroundImage: `url(${scholarship})`, backgroundRepeat: "no-repeat" }}></Icon>
              <TextContainer4>
                <Typography variant="h2" style={{ color: "#FFFFFF" }}>
                  Scholarship worth
                  <span style={{ color: "#0096FF", fontWeight: "600px" }}> ₹94,500</span>
                </Typography>
              </TextContainer4>
            </Pointer4>
            <Pointer5>
              <Icon style={{ backgroundImage: `url(${ads})`, backgroundRepeat: "no-repeat" }}></Icon>
              <TextContainer5>
                <Typography variant="h2" style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#0096FF", fontWeight: "600px" }}>Ad Free</span> learning experience
                </Typography>
              </TextContainer5>
            </Pointer5>
          </CourseDescription>
          <PaymentForm>
            <SubContainer />
          </PaymentForm>
        </Content>
      </Main>
    </ThemeProvider>
  );
};
const Main = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: relative;
  background: #ffffff;
`;
const NavBar = styled.div`
  width: 1920px;
  height: 72px;
  display: flex;
  justify-content: space-between;
`;
const LeftContent = styled.div`
  width: 492px;
  height: 45px;
  margin-left: 106.5px;
  margin-top: 13.5px;
  display: flex;
`;
const Course = styled.div`
  width: 97px;
  height: 24px;
  display: flex;
  margin-left: 64px;
  margin-top: 8px;
`;
const Programs = styled.div`
  width: 109px;
  height: 24px;
  display: flex;
  margin-left: 64px;
  margin-top: 8px;
`;
const Icon1 = styled.div`
  width: 24px;
  height: 24px;
`;
const RightContent = styled.div`
  width: 364px;
  height: 40px;
  display: flex;
  margin-top: 16px;
`;
const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 7px;
`;
const Login = styled.div`
  width: 46px;
  height: 19px;
  margin-left: 64px;
  margin-top: 10.5px;
  text-align: center;
`;

const Logo = styled.div`
  width: 158px;
  height: 45px;
`;
const Content = styled.div`
  width: 1920px;
  height: 1008px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const CourseDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 799px;
  height: 708px;
  margin-left: 144px;
  margin-top: 70px;
`;

const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 549px;
  border-radius: 8px;
  margin-left: 1269px;
  margin-top: 70px;
  background-color: #ffffff;
`;
const Access = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 799px;
  height: 70px;
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  isolation: isolate;
  width: 799px;
  height: 80px;
`;
const Pointer1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 799px;
  height: 64px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 48px;
`;
const Pointer2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 799px;
  height: 64px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 49px;
`;
const Pointer3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 799px;
  height: 64px;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 49px;
`;
const Pointer4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 799px;
  height: 64px;
  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 49px;
`;
const Pointer5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;
  width: 799px;
  height: 64px;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 49px;
`;
const Icon = styled.div`
  width: 68px;
  height: 68px;
`;
const TextContainer1 = styled.div`
  width: 401px;
  height: 32px;
`;
const TextContainer2 = styled.div`
  width: 387px;
  height: 32px;
`;
const TextContainer3 = styled.div`
  width: 387px;
  height: 32px;
`;
const TextContainer4 = styled.div`
  width: 405px;
  height: 32px;
`;
const TextContainer5 = styled.div`
  width: 420px;
  height: 32px;
`;

export default SubscriptionPlans;
