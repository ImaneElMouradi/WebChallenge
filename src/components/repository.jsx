import React, { Component, Fragment } from "react";

class Repository extends Component {
  state = {};

  render() {
    const { isLoading, repos, error } = this.props;
    console.log("repos", repos);
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
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
                    <p className="col-md-2">
                      <i className="far fa-star mr-2" />
                      {stargazers_count}
                    </p>

                    <p className="col-md-2">
                      <i className="fas fa-exclamation-circle mr-2" />
                      {open_issues}
                    </p>
                    <p className="col-md-8">
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
