export const getUser = (username, boundContext) => {
  // Get users from the GH api
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(userData => {
      console.log("User:", userData)
      getFollowers(userData, boundContext);
    })
    .catch(err => console.error(err))
}

export const getFollowers = (userData, boundContext) => {
  fetch(userData?.followers_url)
    .then(res => res.json())
    .then(followers => {
      console.log("Followers:", followers)
      boundContext.setState({...boundContext?.state, user: userData, followers: followers})
    })
    .catch(err => console.error(err))
}