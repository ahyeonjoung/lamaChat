import styled from 'styled-components'

import Header from '../../header/Header'
import StoryBox from './StoryBox'
import FeedBox from './FeedBox'
import InfoBox from './InfoBox'
import React from 'react'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;

  margin: 0;
  padding: 0;
  background: #fafafa;
  z-index: 0;
  display: flex;
  justify-content: center;
`

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 935px;
  height: 100%;
  padding-top: 54px;
  margin-top: 30px;
`

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 614px;
  height: 100%;
  margin-right: 28px;
`



function MainPage() {
  return (
    <div>
      <Background>
        <Header bool={true} />
        <Wrapper1>
          <Wrapper2>
            <StoryBox />
            <FeedBox />
          </Wrapper2>
          <InfoBox />
        </Wrapper1>
      </Background>
    </div>
  )
}

export default MainPage
