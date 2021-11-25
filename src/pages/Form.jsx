import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Navbar";
import ReactInputVerificationCode from "react-input-verification-code";
import img from '../img/bg.jpeg';
import styled from "styled-components";
import { Link, Route, Redirect, useHistory } from "react-router-dom";

const Container = styled.div`
  background-image: url(${img});
  min-height: 100vh;
  height:100%;
`;
const Code = styled.div`
display: flex;
padding-top: 50vh;
/*margin-top: 50vh;*/
justify-content: center;
align-items: center;
`;



const Form = () => {
    let history = useHistory();
    /*const [value, setValue] = useState('');
    const onCompleted = (value) => {
    history.push("/")
  };*/

    return (
        <Container> 
        <Code>
          
            <ReactInputVerificationCode /*onChange={value =>*/ onCompleted={(value) =>{
             if (value == 9911) {
          return history.push("/home")
             }
            }
           } />
    </Code>
   
  </Container>
    );
    }
    export default Form;