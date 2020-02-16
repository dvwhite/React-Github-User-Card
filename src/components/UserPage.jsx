import React from 'react';
import { getUser } from '../utils/utils';

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

  /* user shape should contain:
    avatar_url  
    name
    login  
    location
    html_url
    public_repos
    followers
    following
  */
  render() {
    return (
      <div className='wrapper'>
        {/* Page title */}
        <div className='header'>
          <img src={require("./../images/githublogo.png")} className="icon" alt="GitHub Logo" /> 
          <h1>GitHub API Browser</h1>
        </div>
        {/* User information */}

        <h2>{this.state.user.name || this.props.username}'s Followers</h2>
        {/* Follower cards - click to expand into a modal */}
        <div className='cards'>
          {
            this.state.followers.map(follower => {
              console.log("Follower:", follower)
              return (
                <div className='card' key={follower.id}>
                  {/* Avatar img */}
                  <img className='portrait' src={follower.avatar_url} alt={`${follower.login} on GitHub`} />
                  {/* Follower username */}
                  <div className='card-body'>
                    <h2>{follower.login}</h2>
                  </div>
                </div>
                )
              })
            }
          }
        </div>
      </div>
    )
  }
}

export default UserPage;
