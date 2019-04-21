import React, { PureComponent, Fragment } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

class Repository extends PureComponent {
  formatDate = date => {
    return dayjs(date).fromNow();
  };

  render() {
    const { repos, error } = this.props;

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
            <div className="container repo rounded" key={id}>
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="rounded-circle"
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
                    <p className="col-md-2" data-toggle="tooltip" title="Stars">
                      <i className="fas fa-star mr-2" />
                      {stargazers_count}
                    </p>

                    <p
                      className="col-md-2"
                      data-toggle="tooltip"
                      title="Issues"
                    >
                      <i className="fas fa-exclamation-circle mr-2" />
                      {open_issues}
                    </p>
                    <p className="col-md-8">
                      Submitted {this.formatDate(created_at)} by
                      <a
                        href={owner.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge badge-primary ml-1"
                      >
                        {owner.login}
                      </a>
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
