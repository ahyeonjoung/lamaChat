import React from 'react';
import styled from 'styled-components';
import profile_image from '../../../assets/profile_image.jpeg';

const Wrapper=styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    width:293px;
`;

const TextBox=styled.div`
    display:flex;
    flex-direction: column;
    width:202px;
    padding-left:8px;
`;

const ProfileImage = styled.image`
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 35px;
`

const BlackText=styled.text`
    color: black;
    font-size: 14px;
`;

const GrayText=styled.text`
    color: #8E8E8E;
    font-size: 13px;
`;

const BlueText=styled.text`
    color: #0395F6;
    font-size: 12px;
`;

function RecoList({id,text}){
    return(
        <Wrapper>
            <ProfileImage src={profile_image} />
            <TextBox>
                <BlackText>user {id}</BlackText>
                <GrayText>{text}</GrayText>
            </TextBox>
            <BlueText>팔로우</BlueText>
        </Wrapper>
    )
}

export default RecoList;