import React, { PureComponent, Fragment } from "react";

import Repository from "./Repository";
import dayjs from "dayjs";
import { Waypoint } from "react-waypoint";

class RepoList extends PureComponent {
  state = {
    isLoading: true,
    repos: [],
    error: null,
    currentPage: 1
  };

  urlApiGit = () => {
    const date = dayjs()
      .subtract(30, "day")
      .format("YYYY-MM-DD");

    return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${
      this.state.currentPage
    }`;
  };

  fetchRepos = () => {
    this.setState({ isLoading: true });

    fetch(this.urlApiGit())
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          repos: [...state.repos, ...data.items],
          isLoading: false,
          currentPage: state.currentPage + 1
        }));
      })

      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, repos, error } = this.state;

    return (
      <Fragment>
        <h1 className="title">The most trending repositories in Github</h1>
        <Repository isLoading={isLoading} repos={repos} error={error} />
        <Waypoint onEnter={this.fetchRepos} />
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default RepoList;
