import React from 'react';

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
    return (
      <div className='wrapper'>
        {/* Page title */}
        <div className='header'>
          <img src={require("./../images/githublogo.png")} className="icon" alt="GitHub Logo" /> 
          <h1>GitHub API Browser</h1>
        </div>
        {/* User information */}
        <UserCard data={this.state.user} />
        <h2>{this.state.user.name || this.props.username}'s Followers</h2>
        {/* Follower cards - click to expand into a modal */}
        <div className='cards'>
          {
            this.state.followers.map(follower => {
              console.log("Follower:", follower)
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
