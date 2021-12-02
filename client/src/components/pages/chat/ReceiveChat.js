import styled from 'styled-components'
import Profile from '../../../assets/profile.jpg'
import React from 'react'
const Wrapper = styled.div`
  width: 100%auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const DateWrapper = styled.div`
  display: flex;
  width: 100%auto;
  text-align: center;
  font-size: 12px;
  color: gray;
  justify-content: center;
  margin-bottom: 10px;
`
const ChatWrapper = styled.div`
  display: flex;
  height: 100%auto;
  width: 100%auto;
  flex-direction: row;
  justify-content: flex-start;
`

const Chat = styled.div`
  max-width: 220px;
  height: fit-content;
  border-radius: 20px;
  background-color: white;
  border: 1px solid #efefef;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 14px;
`

const ProfileImage = styled.image`
  margin-top: 25px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-left: 10px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 25px;
`

function ChatList({ message: { text, user },name,date }) {
  return (
    <Wrapper>
      <DateWrapper>{date}</DateWrapper>
      <ChatWrapper>
        <ProfileImage src={Profile} />
        <Chat>{text}</Chat>
      </ChatWrapper>
    </Wrapper>
  )
}
export default ChatList
