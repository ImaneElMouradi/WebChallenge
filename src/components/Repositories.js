import React, { PureComponent } from "react";
import dayjs from "dayjs";
import { Waypoint } from "react-waypoint";

import Repository from "./Repository";

class Repositories extends PureComponent {
  state = {
    isLoading: false,
    repos: [],
    error: null,
    currentPage: 1
  };

  getApiUrl = () => {
    const date = dayjs()
      .subtract(30, "day")
      .format("YYYY-MM-DD");

    return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${
      this.state.currentPage
    }`;
  };

  fetchRepos = () => {
    this.setState({ isLoading: true });

    fetch(this.getApiUrl())
      .then(response => response.json())
      .then(({ items }) => {
        this.setState(({ repos, currentPage }) => ({
          repos: [...repos, ...items],
          isLoading: false,
          currentPage: currentPage + 1
        }));
      })

      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, repos, error } = this.state;

    return (
      <>
        <h1 className="title">The most trending repositories in Github</h1>
        <div className="repos">
          {repos.map(
            ({
              id,
              name,
              owner,
              description,
              stargazers_count,
              open_issues,
              created_at
            }) => (
              <Repository
                key={id}
                isLoading={isLoading}
                name={name}
                owner={owner}
                description={description}
                stargazers_count={stargazers_count}
                open_issues={open_issues}
                created_at={created_at}
                error={error}
              />
            )
          )}
        </div>

        <Waypoint onEnter={this.fetchRepos} />

        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Repositories;
