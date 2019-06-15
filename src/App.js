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
}
`;
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
        console.log(result.data.data.topics)
        this.setState({
          topics: result.data.data.topics,
          errors: result.data.errors
        })
      })
  }
  onChange = (event) => {
    this.setState({ user: event.target.value })
  }
  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { user, topics } = this.state
    return (
      <div className="App">
        <h1>Nc-news</h1>
        <div>
          {topics
            ? (<Topic topics={topics} />)
            : (<p>No information yet ...</p>)}
        </div>
        <div>
          <form onSubmit={this.onSubmit}><label htmlFor="user">Show the user with username:</label>
            <input type="text"
              placeholder="username"
              name="user"
              value={user}
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
