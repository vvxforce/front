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
import {Carousel} from '3d-react-carousal';
import CardSlider from "../components/CardSlider"
import box1 from '../img/box1.png';
import box2 from '../img/box2.png';
import CardItem from "../components/CardItem"

const list = [
  { name: "Indigo", cartinka: box2 },
  { name: "Flasher", cartinka: box1},
  { name: "Shazam", cartinka: box2 },
  { name: "Ingred", cartinka: box1 },
  { name: "Inferno", cartinka: box2 },
  { name: "Community",cartinka: box1 },
  { name: "Corporation", cartinka: box2 }
];

const Container = styled.div`
  background-image: url(${img});
  height: 100%;
`;

const Text = styled.div`
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const SubText = styled.div`
margin-top: 10vh;
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 50px;
letter-spacing: 0.1em;

color: #0D3332;
`;

const Home = (item, products) => {
  return (
    <Container>
      <Navbar/>
      <Text>Gift</Text>
      <Text>Collection</Text>
      <CardSlider
      list={list}
      renderItem={CardItem}
      width={280}
      boxWidth={1000}
      opacity={1}
      scale={0.85}
      disableNext={false}
      disablePrev={false}
      index={3}
      onChange={(index, data) => {
        console.log(index, data);
      }}
    />
      
      <SubText>White Angels</SubText>
      </Container>
  );
};

/*    <Announcement />
       <Products/>
      <Slider />
      <Categories />
      <Newsletter/>
      <Footer/>
      */

export default Home;
