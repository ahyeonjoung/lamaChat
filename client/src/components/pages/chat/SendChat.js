import styled from 'styled-components'
import React from 'react'
const Wrapper = styled.div`
  width: 100%auto;
  height: 100%auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const DateWrapper = styled.div`
  display: flex;
  width: 100%auto;
  height: 20px;
  min-height: 0px;
  font-size: 12px;
  color: gray;
  justify-content: center;
  margin-bottom: 10px;
`
const ChatWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%auto;
  flex-direction: row;
  justify-content: flex-end;
`

const Chat = styled.div`
  max-width: 220px;
  width: 100%auto;
  height: 100%auto;
  border-radius: 20px;
  background-color: #efefef;
  border: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`

function SendChat({ message: { text, user }, name,date }) {
  return (
    <Wrapper>
      <DateWrapper>{date}</DateWrapper>
      <ChatWrapper>
        <Chat>{text}</Chat>
      </ChatWrapper>
    </Wrapper>
  )
}
export default SendChat
