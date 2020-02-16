import React from 'react';
import Anime from 'react-anime';

// Utility functions
import { getUser } from '../utils/utils';
// Components
import FollowerCard from './FollowerCard';
import UserCard from './UserCard';

// The main page with the GitHub API for the user and followers
class UserPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    // Get the github API user object
    getUser(this.props.username, this)
  }

  componentDidUpdate() {
    console.log("State updated to:", this.state)
  }

  render() {
    let animeProps = {
      easing: "easeOutElastic",
      opacity: [0, 1],
      translateY: '1rem',
      delay: (e, i) => i * 2000,
    }

    return (
      Object.keys(this.state.user).length === 0 ?
        null :
        <div className='wrapper'>
          {/* Page title */}
          <div className='header'>
            <img src={require("./../images/githublogo.png")} className="icon" alt="GitHub Logo" /> 
            <h1>GitHub API Browser</h1>
          </div>
          {/* User information */}
          <Anime {...animeProps}>
            <UserCard data={this.state.user} />
          </Anime>
          <h2 style={{'margin-top':'5rem'}}>{this.state.user.name || this.props.username}'s Followers</h2>
          {/* Follower cards - click to go to the GH url for that user */}
          <div className='cards'>
            {
              this.state.followers.map(follower => {
                return (
                    <FollowerCard data={follower} />
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default UserPage;
