import React, { useEffect, useState, useReducer ,useRef} from "react";
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { RiEmotionHappyLine } from 'react-icons/ri'
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import styled from 'styled-components'
import Profile from './profile.jpg'
// 하위 컴포넌트
import Messages from "../Messages/Messages";
import Input from "../Input/Input";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  border: 1px solid #dbdbdb;
`
const NicknameBox = styled.div`
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`
const ProfileImage = styled.image`
  margin-top: 15px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 25px;
`
const ProfileWrapper = styled.div`
  width: 130px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`
const AlwaysScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height:590px;
`
const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`
const InputBox = styled.div`
  width: 500px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  height: 40px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`
const Input2 = styled.input`
  height: 35px;
  width: 370px;
  border: 1px solid white;
  outline: none;
`
let socket;

const Chat = ({ location }) => {
  const scrollRef = useRef()
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState("");

  const ENDPOINT = "http://localhost:4000/";

  useEffect(() => {
    // query-string middleware의 사용
    // const data = queryString.parse(location.search);
    // console.log(location.search); // ?name=lama&room=peru
    // console.log(data); // 객체 : {name: "lama", room: "peru"}
    // 다시 정리
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); // 소켓 연결

    setName(name);
    setRoom(room);

    console.log(name, room); // lama peru

    // console.log(socket);
    socket.emit("join", { name, room }, (error) => {
      // console.log("error");
      // 에러 처리
      if (error) {
        alert(error);
      }
    });

    // return () => {
    //   socket.emit("disconnect");

    //   socket.off();
    // };
  }, [ENDPOINT, location.search]); // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

  useEffect(() => {
    // 서버에서 message 이벤트가 올 경우에 대해서 `on`
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  // 메세지 보내기 함수
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, setMessage(""));
    }
  };

  console.log(message, messages);
  console.log(users, "users");

  // return <h1>Chat</h1>;
  // 1.roominfo
  // 2.messages
  // 3.input
  return (
    <Wrapper>
         
         <NicknameBox>
        <ProfileWrapper>
          <ProfileImage src={Profile} />
          <p style={{ marginTop: '17px' }}>as_dkjf </p>
        </ProfileWrapper>
        <IoIosInformationCircleOutline
          style={{ height: '55px', fontSize: '30px', marginRight: '15px' }}
        />
      </NicknameBox>

      <AlwaysScrollWrapper ref={scrollRef}>
        
        
            <Messages messages={messages} name={name} />
            </AlwaysScrollWrapper>
            <ChatWrapper>
            <InputBox>
            <RiEmotionHappyLine
            style={{
              height: '40px',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
            </InputBox>
            </ChatWrapper>
           
  
          
</Wrapper>
  );
};

export default Chat;
