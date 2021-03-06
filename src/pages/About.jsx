import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import img from '../img/bg.jpeg';
import box2 from '../img/box2.png';

const Container = styled.div`
  background-image: url(${img});
  min-height: 100vh;
  background-size: cover;
`;


const Text = styled.div`
padding: 25vh 5vw;
display:flex;
align-items: flex-start;
font-size: 16px;
`;

const SubText = styled.div`
 margin-top: 8vw;
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const About = () => {
  return (
     
      <Container>
         <Navbar/>
      <Text>Here will be information about White Angels
      <img src={box2}/></Text>
      </Container>
  );
};

export default About;