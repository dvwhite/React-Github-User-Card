import React from 'react';
import styled from 'styled-components';
import './../index.scss';

// Base styles
const Card = styled.div`
  background: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 
              0 0 2px rgba(0, 0, 0, 0.12), 
              0 2px 4px rgba(0, 0, 0, 0.24)
`

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
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-style: italic;
`

const Info = styled.p`
  font-size: 1rem;
`

// Main component rendering the user's information from 
// the GitHub API
const UserCard = ({ data }) => {
  return (
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
          <Info>Profile: {data.html_url}</Info>
          <Info>Public repos: {data.public_repos}</Info>
          <Info>Followers: {data.followers}</Info>
          <Info>Following: {data.following}</Info>
          <Info>Bio: {data.bio}</Info>  
        </ContentColumn>
      </Row>
    </Card>
  )
}

export default UserCard;
