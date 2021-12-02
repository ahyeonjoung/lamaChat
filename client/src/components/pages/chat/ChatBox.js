import styled from 'styled-components'
import Profile from '../../assets/profile.jpg'
import queryString from "query-string";
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoImageOutline } from 'react-icons/io5'
import ChatList from './ReceiveChat'
import SendChat from './SendChat'
import { AlwaysScrollSection } from '../../components/AlwaysScrollSection'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { useEffect, useRef, useCallback, useState } from 'react'
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux'
import io from 'socket.io-client';
import axios from 'axios'
import SockJS from 'sockjs-client'
import React from 'react'
import Messages from "./Messages/Messages"
import Input from "./Input/Input"


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  border: 1px solid #dbdbdb;
  height: 600px;
`
const InputWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
const AlwaysScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height:600px;
`
let socket;

function ChatBox({location}) {
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
const scrollToBottom = useCallback(() => {
    // 스크롤 내리기
    scrollRef?.current?.scrollTo(0, 10000)
  }, [])
  useEffect(() => {
    scrollToBottom()
  }, [])
  
  


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
        <ChatList
          date="2021년 10월 22일 오후 7:18"
          contents="엥 핳거야???????????????"
        />
        <SendChat contents="아니 내말이" />
        <SendChat contents="나왜붙었냐고" />
        <ChatList contents="헐씈ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
        <SendChat
          date="2021년 11월 1일 오후 6:31"
          contents="너가아이패드라니.."
        />
        <ChatList contents="누구보다 잘쓰는중,," />
        <ChatList
          date="2021년 11월 14일 오후 12:38"
          contents="요니 이제 저기 포토스팟 됐넼ㅋㅋㅋㅋㅋㅋㅌㅋㅌㅌㅋㅋ"
        />
        <SendChat
          date="2021년 11월 14일 오후 9:19"
          contents="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ응ㅎ"
        />
        <SendChat
          date="2021년 11월 14일 오후 9:19"
          contents="ㅁㅊㅋㅋㅋㅋㅋㅋㅋㅋㅋ방밖으로 안나갈라고그러는거여???ㅋㅋㅋㅋㅋㅋ개꿀이다"
        />
        <ChatList contents="ㅋㅋㅋㅋㅋㅋㅌㅌㅋㅋㅋㅋㅋㅋㅋㅋ행복,,,," />
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
          <Input2 placeholder="메세지입력..." />
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
        </InputBox>
      </ChatWrapper>
      <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
    </Wrapper>
  )
}

export default withRouter(ChatBox)
