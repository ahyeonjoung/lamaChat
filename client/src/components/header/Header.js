import styled from 'styled-components'
import instagram_logo from '../../assets/instagram_logo.png'
import profile_image from '../../assets/profile_image.jpeg'
import UploadPage from '../pages/upload/UploadPage'
import { BiSearch } from 'react-icons/bi'
import { BsHouseDoorFill, BsHouseDoor,BsPlusSquare } from 'react-icons/bs'
import { IoPaperPlaneOutline, IoPaperPlane } from 'react-icons/io5'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiFillCompass, AiOutlineCompass } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  margin: 0;
  padding: 0;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  z-index: 100;
`

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 935px;
  height: 54px;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
`

const InputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 3px;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  width: 189px;
  height: 20px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
`

const InputConsol = styled.input`
  background-color: #fafafa;
  border: none;
  outline: none;
  width: 400px;
  ::-webkit-input-placeholder {
    color: #d5d5d5;
  }
`

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 242px;
  height: 22px;
  padding-left:24px;
`

const Profile=styled.div`
  width:24px;
  height:24px;
  border-radius: 50%;
  overflow:hidden;
`;

function Header({ bool }) {
  const history = useHistory()
  const [iconState, setIconState] = useState(bool)
  const onHomeClick = () => {
    setIconState(true)
    history.push(`/`)
  }
  const onChatClick = () => {
    console.log('click')
    setIconState(false)
    history.push(`/chat`)
  }
  return (
    <>
      <Wrapper1>
        <Wrapper2>
          <a href="/">
            <img src={instagram_logo} alt="logo" height="45px" />
          </a>
          <InputBox>
            <BiSearch size="26px" color="#A7AAAD" />
            <InputConsol placeholder="검색" />
          </InputBox>
          {iconState ? (
            <IconBox>
              <BsHouseDoorFill size="23px"/>
              <IoPaperPlaneOutline onClick={onChatClick} size="23px" />
              <UploadPage />
              <AiOutlineCompass size="24px" />
              <FaRegHeart size="22px" />
              <Profile>
                <img src={profile_image} width="100%" height="100%" style={{objectFit:"cover"}}/>
              </Profile>
            </IconBox>
          ) : (
            <IconBox>
              <BsHouseDoor onClick={onHomeClick} size="23px" />
              <IoPaperPlane size="23px" />
              <UploadPage />
              <AiOutlineCompass size="24px" />
              <FaRegHeart size="22px" />
              <Profile>
                <img src={profile_image} width="100%" height="100%" style={{objectFit:"cover"}}/>
              </Profile>
            </IconBox>
          )}
        </Wrapper2>
      </Wrapper1>
    </>
  )
}
export default Header
