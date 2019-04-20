import React, { Component, Fragment } from "react";
import "./App.css";
import Repository from "./components/repository";

class App extends Component {
  state = {
    isLoading: true,
    repos: [],
    error: null
  };

  fetchRepos = () => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          repos: data.items,
          isLoading: false
        });
      })

      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.fetchRepos();
  }

  render() {
    const { isLoading, repos, error } = this.state;

    return (
      <Fragment>
        <h1>The most trending repositories in Github</h1>
        <Repository isLoading={isLoading} repos={repos} error={error} />
      </Fragment>
    );
  }
}

export default App;
