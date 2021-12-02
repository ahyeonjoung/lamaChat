import styled from 'styled-components'
import Header from '../../../components/header/Header'
import ChatBox from '../../Chat/Chat'
import FreindBox from './FriendBox'
import { withRouter } from 'react-router'
import React from 'react'
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fafafa;
  z-index: 0;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 600px;
  background-color: white;
  margin-top: 80px;
`

const ChatPage=({location})=> {
  console.log(location)
  return (
    <Background>
      <Header bool={false} />
      <Wrapper>
        <ChatWrapper>
          <FreindBox />
          <ChatBox location={location}/>
        </ChatWrapper>
      </Wrapper>
    </Background>
  )
}

export default withRouter(ChatPage)
