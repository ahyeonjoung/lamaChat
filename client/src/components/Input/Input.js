import React from "react";
import "./Input.css";

import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'

const Input2 = styled.input`
  height: 35px;
  width: 370px;
  border: 1px solid white;
  outline: none;
`

const Input = ({ message, setMessage, sendMessage }) => (
  //   return <div className="Input"></div>;
  // <form className="inputForm">
  <>
  <Input2

      type="text"
      placeholder="메세지입력..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <IoIosInformationCircleOutline
            style={{
              height: '40px',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          />
          <FaRegHeart
            style={{
              height: '40px',
              fontSize: '25px',
              marginLeft: '10px',
            }}
          />
   
    </>

);
export default Input;
