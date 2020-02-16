import React from 'react';
import styled from 'styled-components';

// Base styles
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Column = styled(Row)`
  flex-direction: column;
`

// Profile picture, width of content:pic is 60/40
const ProfileWrapper = styled(Column)`
  width: 40%;
`

const ProfilePic = styled.img`
  width: 100%;
`

// Profile text content
const ContentColumn = styled(Column)`
  justify-content: flex-start;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-decoration: italic;
`

const Info = styled.p`
  font-size: 1rem;
`

// Main component rendering the user's information from 
// the GitHub API
const UserCard = ({ data }) => {
  return (
    <Row>
      {/* Profile pic column */}
      <ProfileWrapper>
        <ProfilePic
          src='' alt=''
        />
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
        <Info>Bio {data.bio}</Info>  
      </ContentColumn>
    </Row>
  )
}

export default UserCard;
