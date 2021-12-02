import React,{useState} from 'react';
import styled from 'styled-components';
import profile_image from '../../../assets/profile_image.jpeg';
import feed_image from '../../../assets/feed_image.png';
import {FiMoreHorizontal} from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FaHeart, FaRegHeart,FaRegBookmark } from 'react-icons/fa';
import {FiMessageCircle} from 'react-icons/fi';
import {MdTagFaces} from 'react-icons/md';

const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:614px;
    height:auto;
    border: 1px solid #dbdbdb;
    margin-bottom: 25px;
`;

const Wrapper1=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:614px;
    height:60px;
    border-bottom:1px solid #EFEEEF;
    background-color: white;
`;

const Wrapper2=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width:614px;
    height:50px;
    padding-left: 16px;
    padding-right: 4px;
    background-color: white;
`;

const Wrapper3=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:582px;
    height:50px;
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`;

const IconBox=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    width:120px;
    height: 50px;
    background-color: white;
`


const ContentBox=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width:582px;
    min-height: 50px;
    background-color: white;
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`

const CommentBox=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:582px;
    height:50px;
    border-top:1px solid #DBDBDB;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`;

const ProfileImage = styled.image`
  border:1px solid #EFEEEF;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-right: 14px;
  background: url(${props => props.src});
  background-size: 30px;
  
`;

const BlackText=styled.text`
    color: black;
    font-size: 13px;
`;


const InputConsol = styled.input`
  background-color: white;
  border: none;
  outline: none;
  width: 500px;
  ::-webkit-input-placeholder {
    color: gray;
  }
`


function FeedList({id,user,text}){
    const [liked,setLiked]=useState(false);
    const [likeNum,setLikeNum]=useState(44);

    const clickLike=()=>(
        liked?
        (
        setLiked(false),
        setLikeNum(likeNum-1)
        ):(
        setLiked(true),
        setLikeNum(likeNum+1)
        )
    )
    return(
        <Wrapper>
            <Wrapper1>
                <Wrapper2>
                    <ProfileImage src={profile_image} />
                    <p style={{fontSize:'14px', fontWeight:'bold'}}>{user}</p>
                </Wrapper2>
                <FiMoreHorizontal size="18px" style={{margin:"20px"}}/>
            </Wrapper1>
            <img src={feed_image} width="614px" onDoubleClick={clickLike} />
            <Wrapper3>
                <IconBox>
                    {liked?
                    <FaHeart size="22px" color="red" onClick={clickLike} />
                    :<FaRegHeart size="22px" onClick={clickLike}                    
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}/>
                }

                    <FiMessageCircle
                    size="24px"
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                    />
                    <IoPaperPlaneOutline
                    size="24px"
                    onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                    onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                    />
                </IconBox>
                <FaRegBookmark
                size="22px"
                onMouseEnter={({target})=>(target.style.color='gray',target.style.cursor='pointer')}
                onMouseLeave={({target})=>(target.style.color='black',target.style.cursor='default')}
                />
            </Wrapper3>

            <ContentBox>
                <p style={{fontSize:'13px', color:'black', fontWeight:'bold' }}>좋아요 {likeNum}개</p>
                <div>
                    <BlackText style={{fontWeight:"bold"}}>{user}&nbsp;</BlackText>
                    <BlackText>{text}</BlackText>
                </div>
                <p style={{ fontSize: '10px', color:'gray'}}>
                    2일 전
                </p>
            </ContentBox>
            <CommentBox>
                <MdTagFaces size="26px" />
                <InputConsol placeholder='댓글 달기...' />
                <p style={{fontSize:'14px', color:'skyblue'}}>게시</p>
            </CommentBox>
        </Wrapper>
    )
}

export default FeedList;