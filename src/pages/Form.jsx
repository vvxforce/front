import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Navbar";
import ReactInputVerificationCode from "react-input-verification-code";
import img from '../img/bg.jpeg';
import styled from "styled-components";
import { Link, Route, Redirect, useHistory } from "react-router-dom";
import { mainModule } from "process";
import logoBlack from '../img/logo_black.png'

const Container = styled.div`
  background-image: url(${img});
  min-height: 100vh;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;




const Logo = styled.img`
padding-top: 1vh;
width: 10%;
`;



const Code = styled.div`
padding-top:1vh;
font-size: 1.5rem;
font-weight: bold;

`;

const CodeVer = styled.div`
padding-top:1vh;
font-size: 1.5rem;
font-weight: bold;
--ReactInputVerificationCode-itemWidth: 3rem;
--ReactInputVerificationCode-itemHeight: 3rem;
`;

const Text = styled.div`
padding: 10vh 5vw;
 justify-content: left;
 font-size: 4rem;
 font-weight: bold;
 letter-spacing: 0.02em;
 text-transform: uppercase;
`;


const InputForm = styled.div`
margin-top: 5vh;
`;

const FormText = styled.div`
margin-top: 1vh;
font-style: normal;
font-weight: bold;
font-size: 1rem;
/* identical to box height */
letter-spacing: 0.06em;
color: #0D3332;
`;

const Input = styled.input`
padding-left:1vw;
margin-top: 2vh;
border-radius: 5px;
border: 2px #FFFFFF;
background: linear-gradient(90.61deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
backdrop-filter: blur(20px);
width: 100%;
height: 5vh;
font-size: 1rem;
font-style: normal;
font-weight: bold;
color: #0D3332;
`;

const Button = styled.button`
margin-top: 4vh;
background: #FFFFFF;
border-radius: 100px;
width: 20vw;
font-size: 1rem;
font-style: normal;
font-weight: bold;
height: 5vh;
border: none;
`;


const Form = () => {
    let history = useHistory();
    /*const [value, setValue] = useState('');
    const onCompleted = (value) => {
    history.push("/")
  };*/

    return (
        <Container> 
          <Logo src={logoBlack}></Logo>
          <Text>White Angels</Text>
        <Code>Do you have a signal?</Code>
        <CodeVer> <ReactInputVerificationCode /*onChange={value =>*/ onCompleted={(value) =>{
             if (value == 9911) {
          return history.push("/home")
             }
            }
           } />
    </CodeVer> 
    <InputForm inputMode><FormText>Enter your email to receive a signal</FormText>
    <Input Text="example@mail.com" placeholder="example@mail.com"/></InputForm>
    <Button>Subscribe</Button>
   
  </Container>
    );
    }
    export default Form;