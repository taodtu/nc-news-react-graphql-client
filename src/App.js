import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Topic from './component/Topic'
import User from './component/User'

const axiosNcGraphQL = axios.create({
  baseURL: "https://nc-news-graphql-server.herokuapp.com/graphql"
});
const GET_TOPICS = `
{
  topics{
    slug
    description
    article_count
    comment_count
  }
}`;
const GET_USER = username => `
query{ getUser(username:"${username}"){
  username
  name
  avatar_url
  article_count
  comment_count
}  
}`;
class App extends Component {
  state = {
    topics: '',
    user: ""
  }
  componentDidMount() {
    this.onFetch();
  }
  onFetch = () => {
    axiosNcGraphQL
      .post('', { query: GET_TOPICS })
      .then(result => {
        this.setState({
          topics: result.data.data.topics,
          errors: result.data.errors
        })
      })
  }
  fetchUser = username => {
    const query = GET_USER(username)
    axiosNcGraphQL
      .post('', { query })
      .then(result => {
        this.setState({
          user: result.data.data.getUser,
          errors: result.data.errors
        })
      })
  }
  onChange = (event) => {
    this.setState({ user: event.target.value })
  }
  onSubmit = (event) => {
    this.fetchUser(this.state.user)
    event.preventDefault();
  }

  render() {
    const { user, topics, errors } = this.state
    return (
      <div className="App">
        <h1>Nc-news</h1>
        <div>
          {topics
            ? (<Topic topics={topics} errors={errors} />)
            : (<p>No information yet ...</p>)}
        </div>
        <div>
          <form onSubmit={this.onSubmit}><label htmlFor="user">Show the user with username:</label>
            <input type="text"
              placeholder="username"
              name="user"
              value={user.username}
              onChange={this.onChange}
            />
            <button type="submit" >Search</button>
          </form>
        </div>
        <hr />
        <div>
          <User user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
