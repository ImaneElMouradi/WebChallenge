import React, { Component, Fragment } from "react";

class Repository extends Component {
  state = {};

  render() {
    const { isLoading, repos, error } = this.props;
    console.log("repos", repos);
    if (isLoading) {
      return (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <Fragment>
        {error && <p>We have encountered an error</p>}

        {repos.map(repo => {
          const {
            id,
            name,
            owner,
            description,
            stargazers_count,
            open_issues,
            created_at
          } = repo;

          return (
            <div className="container repo" key={id}>
              <div className="row">
                <div className="col-md-2">
                  <img
                    src={owner.avatar_url}
                    alt={owner.login}
                    width="150"
                    height="150"
                  />
                </div>
                <div className="col-md-10">
                  <h3>{name}</h3>
                  <hr />
                  <p>{description}</p>
                  <div className="row">
                    <p className="col-md-1">{stargazers_count}</p>
                    <p className="col-md-1">{open_issues}</p>
                    <p className="col-md-10">
                      {created_at} By {owner.login}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Repository;
