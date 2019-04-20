import React, { Component, Fragment } from "react";

import Repository from "./Repository";
import dayjs from "dayjs";
import InfiniteScroll from "react-infinite-scroller";

class RepoList extends Component {
  state = {
    isLoading: true,
    repos: [],
    error: null,
    currentPage: 1,
    pageSize: 10
  };

  urlApiGit = () => {
    const date = dayjs()
      .subtract(30, "day")
      .format("YYYY-MM-DD");

    return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;
  };

  fetchRepos = () => {
    fetch(this.urlApiGit())
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
        <h1 className="title">The most trending repositories in Github</h1>
        <Repository isLoading={isLoading} repos={repos} error={error} />
      </Fragment>
    );
  }
}

export default RepoList;
