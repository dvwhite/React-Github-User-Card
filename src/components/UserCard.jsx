import React from 'react';
import styled from 'styled-components';
import './../index.scss';

// Base styles
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Column = styled(Row)`
  flex-direction: column;
`

// Profile picture, width of content:pic is 60/40
const ProfileWrapper = styled(Column)`
  width: 60%;
  height: auto;
  margin-left: 0;
  padding: 0;
  border-radius: 10px 0 0 10px;
  box-shadow: 0;
`

const ProfilePic = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`

// Profile text content
const ContentColumn = styled(Column)`
  display: block;
  text-align: left;
  margin: 0 2%;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 0.05em #9bcfe0;
  margin-bottom: 0.5%;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
`

const Info = styled.p`
  font-size: 1rem;
`

// Card flip animation components

// The component in charge of executing the animation
const Rotater = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
`

// The outer div around the rotating content, which
// triggers the hover effect
const RotationWrapper = styled.div`
  perspective: 1000px;
  height: 23em;
  margin-bottom: 7%;

  &:hover ${Rotater} {
    transform: rotateY(180deg);
  }
`

const Card = styled.div`
  background: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 
              0 0 2px rgba(0, 0, 0, 0.12), 
              0 2px 4px rgba(0, 0, 0, 0.24);
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 40rem;

  @media (max-width: 700px) {
    width: 95%;
    height: auto;
    left: 2.5%;
  }
`

// The front face of the card
const CardFront = styled(Card)`
  z-index: 2;
  transform: rotateY(0deg);
  position: relative;
`

// The back face of the card
const CardBack = styled(Card)`
  transform: rotateY(180deg);
  transition: 0.3s all ease;
  position: relative;
  height: 23em;
`

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

// Contribution graph
const Graph = styled.img`
  width: 95%;
`

// Main component rendering the user's information from 
// the GitHub API
const UserCard = ({ data }) => {
  return (
    <RotationWrapper key={data.id}>
      <Rotater>
        {/* Front of the card */}
        <CardFront>
          <Card>
            <Row className='card'>
              {/* Profile pic column */}
              <ProfileWrapper>
                {data.name !== undefined ? 
                  <ProfilePic
                    src={data.avatar_url} alt={`${data.login}'s GitHub Avatar`}
                  />
                  : <img src={require("./../images/githublogo.png")} className="portrait" alt="GitHub Logo" />}
              </ProfileWrapper>
              {/* Profile info column */}
              <ContentColumn>
                <Title>{data.name}</Title>
                <Subtitle>{data.login}</Subtitle>
                <Info>Location: {data.location}</Info>
                <Info>Followers: {data.followers}</Info>
                <Info>Following: {data.following}</Info>
                {data.bio?.length > 0 ? <Info>Bio: {data.bio}</Info> : null}  
              </ContentColumn>
            </Row>
          </Card>
        </CardFront>
        {/* Back of the card */}
        <CardBack>
          <GraphWrapper>
            <h1 style={{'margin-top':'10%'}}>GitHub Contribution Graph</h1>
            <Graph src={`http://ghchart.rshah.org/${data.login}`} alt={`${data.login}'s GitHub Contribution Chart`} />
            <Info>Public repos: {data.public_repos}</Info>
            <a href={data.html_url}>
              <h2>View on GitHub</h2>
            </a>
          </GraphWrapper>
        </CardBack>
      </Rotater>
    </RotationWrapper>
  )
}

export default UserCard;
