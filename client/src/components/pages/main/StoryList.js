import React from 'react';
import styled from 'styled-components';
import profile_image from '../../../assets/profile_image.jpeg';

const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80px;
    height:100px;
    margin-left: 10px;
    margin-right:10px;
`;

const ProfileImage = styled.image`
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 50%;
  border:4px solid #CE4B9A;
  height: 55px;
  width: 55px;
  background: url(${props => props.src});
  background-size: 55px;

`

const BlackText=styled.text`
    color: black;
    font-size: 13px;
`;



function StoryList({id,read,special}){
    return(
        <Wrapper>
            <ProfileImage src={profile_image} />
            <BlackText>user {id}</BlackText>
        </Wrapper>
    )
}

export default StoryList;