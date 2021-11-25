import * as React from "react";
import box1 from '../img/box1.png';
import box2 from '../img/box2.png';
import styled from "styled-components";

const Item = styled.div`
margin-top: 1vh;
`;

const Text3 = styled.div`
padding-top: 2vh;
text-transform: capitalize;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 25px;
/* identical to box height */
letter-spacing: 0.06em;
color: #0F4240;
`;


const CardItem = ({ name, style, cartinka, item }) => (
  <Item>
  <div
    style={{
      width: 240,
      height: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      color: "#0F4240",
      textAlign: "center",
      border: "4px solid #C2E8F2",
      boxSizing: "border-box",
      borderRadius: "20px",
      paddingBottom: "40px",
      backdropFilter: "blur(10px)",
      boxShadow: "inset 2px 2px 15px rgba(13, 51, 49, .6)",
      ...style
    }}
  >
   <img className= "card-img" src={cartinka} height="50%" />
    <Text3>{name}</Text3>
  </div>
  </Item>
);

export default CardItem;
