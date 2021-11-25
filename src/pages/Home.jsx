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
import '../font/font.css';
import Input from '../img/input-main.png'

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
  min-height: 100vh;
`;

const Text = styled.div`
text-transform: uppercase;
font-family: Roboto;
 display:flex;
 justify-content: center;
 font-size: 2.5rem;
`;

const TextLine1 = styled.div`
 margin-top: 7vh;
 display:flex;
 font-family: Lemonmilk;
 justify-content: center;
 font-size: 2.5rem;
`;

const SubText = styled.div`
margin-top: 2vh;
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 2.5rem;
letter-spacing: 0.1em;
color: #0D3332;
`;

const InputMain = styled.div`
padding: 0 3vw;
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const Home = (item, products) => {
  return (
    <Container>
      <Navbar/>
      <TextLine1>Gift</TextLine1>
      <Text>Collection</Text>
      <CardSlider
      list={list}
      renderItem={CardItem}
      width={280}
      boxWidth={800}
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
      <InputMain><img src={Input} width="20%"/></InputMain>
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
