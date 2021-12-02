import styled from 'styled-components'
import Header from '../../../components/header/Header'

import 'antd/dist/antd.css'

import { Modal, Button, Upload, message } from 'antd'
import React, { useState, useRef, useEffect } from 'react'
import { BsHouseDoorFill, BsHouseDoor, BsPlusSquare } from 'react-icons/bs'
import VideoImage from './video.PNG'
import Profile from "../../../assets/profile.jpg"
import Photo from './photo.png'

const Wrapper = styled.div`
  display: flex;
`
const CardWrapper = styled.div`
  width: 650px;
  height: 300px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`
const ButtonWrapper = styled.div`
  width: 650px;
  height: 250px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

const ImageWrapper=styled.div`
width:500px;
height:100%;
background: url(${props => props.src});
background-color: black;
background-size: contain;
background-repeat: no-repeat;
display: flex;
background-position: center;
`

const PictureWrapper=styled.div`
display:flex;
flex-direction: row;
width:100%;
height:550px;
`

const TextWrapper=styled.div`
display: flex;
flex-direction: column;

`
const ProfileImage = styled.image`
  margin-top: 15px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 25px;
  margin-left: 20px;
`
const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

const InputWrapper=styled.textarea`
width:350px;
height:200px ;
margin-left: 20px;
text-align: start;
display: flex;
justify-content: flex-start;
border: none;
outline:none;
background-color: white;

`

function UploadPage() {

  const { Dragger } = Upload
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [uploadState, setUploadState] = useState({
    status: 'idle',
    member: {
      image: '',
      upload: true,
    },
  })
  const onPreview = async file => {
    let src = file.url
    console.log(file)
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    setUploadState({
      status: 'resolved',
      member: {
        image: src,
        upload:false,
      },
    })
    console.log(src)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancle = () => {
    setIsModalVisible(false)
  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
        console.log(info.file.url)
        
      }
      if (status === 'done') {
        console.log(`${info.file.name} file uploaded successfully.`)
        console.log(info.file)
      } else if (status === 'error') {
        console.log(`${info.file.name} file upload failed.`)
        console.log(info?.file, info.fileList)
        console.log(info)
        onPreview(info.file)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }
  const buttonprops = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <Wrapper>
      <BsPlusSquare size="22px" onClick={showModal} />
      <Modal
        title="새 게시물 만들기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancle}
        footer={null}
        width={uploadState?.member?.upload?680:900}
        style={{ borderRadius: '10%'}}
        centered="true">
          {uploadState?.member?.upload? 
          <>
          <Dragger
          {...props}
          onDownload={onPreview}
          showUploadList={true}
          style={{ backgroundColor: 'white', border: '1px solid white' }}>
          <CardWrapper>
            <img src={VideoImage} style={{ marginBottom: '5px' }} />
            <img
              src={uploadState?.member?.image}
              style={{ marginBottom: '5px' }}
            />
            <p
              style={{
                fontSize: '23px',
                textAlign: 'center',
              }}>
              {' '}
              사진과 동영상을 여기에 끌어다 놓으세요
            </p>
          </CardWrapper>
        </Dragger>
        <ButtonWrapper>
          <Upload {...buttonprops} onPreview={onPreview}>
            <Button type="primary" style={{ borderRadius: '5px' }}>
              컴퓨터에서 선택
            </Button>
          </Upload>
        </ButtonWrapper> </>
        :
        <PictureWrapper>
          <ImageWrapper src={uploadState?.member?.image} />
          <TextWrapper>
          <ProfileWrapper>
          <ProfileImage src={Profile} />
          <p style={{ marginTop: '17px' }}>as_dkjf </p>
          <Button style={{marginLeft:'180px',fontSize:'13px',height:'30px',border:'1px solid white',marginTop:'10px'}}>공유하기</Button>
        </ProfileWrapper>
        <InputWrapper placeholder='문구 입력...' />

          </TextWrapper>
        </PictureWrapper>
         }
        
      </Modal>
    </Wrapper>
  )
}

export default UploadPage
