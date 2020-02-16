import React from 'react';
import styled from 'styled-components';
import './../index.scss';


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
  width: 15rem;
  height: 20rem;
  margin: 2%;

  &:hover ${Rotater} {
    transform: rotateY(180deg);
  }
`

const Card = styled.div`
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 -1px 0 #e0e0e0, 
              0 0 2px rgba(0, 0, 0, 0.12), 
              0 2px 4px rgba(0, 0, 0, 0.24);
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
`

// The front face of the card
const CardFront = styled(Card)`
  z-index: 2;
  transform: rotateY(0deg);
`

// The back face of the card
const CardBack = styled(Card)`
  transform: rotateY(180deg);
  transition: 0.3s all ease;

  img {
    width: 100%;
  }
`

const FollowerCard = ({data}) => {
  return (
  <RotationWrapper key={data.id}>
      <Rotater>
        <CardFront>
          {/* Avatar img */}
          <img className='portrait' src={data.avatar_url} alt={`${data.login} on GitHub`} />
          {/* Follower username */}
          <div className='card-body'>
            <h2>{data.login}</h2>
          </div>
        </CardFront>
        <CardBack>
          {/* Github logo on card back */}
          <img className='portrait' src={require("./../images/githublogo.png")} alt="GitHub Logo" />  
          {/* Link to the modal launcher */}
          <div className='card-body card-body-bg'>
            <a href={data.html_url}>
              <h2>View GitHub Details</h2>
            </a>
          </div>
        </CardBack>
      </Rotater>
    </RotationWrapper>
  )
}

export default FollowerCard;