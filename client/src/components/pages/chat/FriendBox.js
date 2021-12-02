import styled from 'styled-components'
import { IoIosArrowDown, IoIosCreate } from 'react-icons/io'
import { HiPencilAlt } from 'react-icons/hi'
import FriendList from './FreindList'
import { AlwaysScrollSection } from '../../AlwaysScrollSection'
import { useEffect, useCallback, useState, useRef } from 'react'
import React from 'react'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid #dbdbdb;
`

const NicknameBox = styled.div`
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const FixedPosition = styled.div`
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-size: 17px;
  color: black;
  font-weight: bold;
`

function FreindBox() {
  const scrollRef = useRef()
  const [sendState, setSendState] = useState({
    status: 'idle',
    member: '',
  })

  const scrollToBottom = useCallback(() => (
    // 스크롤 내리기
    scrollRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  ), [])

  useEffect(() => {
    scrollToBottom()
  }, [])

  return (
    <Wrapper>
      <NicknameBox>
        <FixedPosition top="18" left="130">
          zz0_0nn{' '}
        </FixedPosition>
        <FixedPosition top="0" left="210">
          <IoIosArrowDown style={{ fontSize: '20px' }} />
          <HiPencilAlt style={{ fontSize: '20px', marginLeft: '90px' }} />
        </FixedPosition>
      </NicknameBox>
      <AlwaysScrollSection ref={scrollRef}>
        {FrindData.map((friend) => {
          return(
          <FriendList
            nickname={friend.nickname}
            contents={friend.contents}
            time={friend.time}
          />)
          })}
      </AlwaysScrollSection>
    </Wrapper>
  )
}

export default FreindBox

const FrindData = [
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
  {
    key: 1,
    nickname: 'as_dkjf',
    contents: '이펍한달남아서 오열중',
    time: '16시간',
  },
]
