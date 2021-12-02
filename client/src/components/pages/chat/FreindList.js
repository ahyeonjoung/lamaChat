import styled from 'styled-components'
import Profile from '../../../assets/profile.jpg'
import React from 'react'
const Wrapper = styled.div`
  width: 100%auto;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  &:hover {
    background-color: #fafafa;
  }
`

const ProfileImage = styled.image`
  margin-top: 15px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 50px;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 250px;
  height: 60px;
  justify-content: center;
`

function FriendList({ nickname, contents, time }) {
  return (
    <Wrapper>
      <ProfileImage src={Profile} />
      <ColumnWrapper>
        <p style={{ fontSize: '14px', height: '10px' }}> {nickname}</p>
        <p style={{ fontSize: '13px', height: '10px', color: 'gray' }}>
          {' '}
          {contents} ·{time}
        </p>
      </ColumnWrapper>
    </Wrapper>
  )
}

export default FriendList
