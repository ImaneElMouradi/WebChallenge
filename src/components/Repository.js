import React, { PureComponent } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

class Repository extends PureComponent {
  formatDate = date => dayjs(date).fromNow();

  render() {
    const {
      name,
      owner: { avatar_url, login, html_url },
      description,
      stargazers_count,
      open_issues,
      created_at,
      error
    } = this.props;

    return (
      <>
        {error && <p>We have encountered an error</p>}
        <div className="container repo">
          <div className="row">
            <div className="col-md-2">
              <img
                className="rounded-circle"
                src={avatar_url}
                alt={login}
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

                <p className="col-md-2" data-toggle="tooltip" title="Issues">
                  <i className="fas fa-exclamation-circle mr-2" />
                  {open_issues}
                </p>
                <p className="col-md-8">
                  Submitted {this.formatDate(created_at)} by
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-info ml-1"
                  >
                    {login}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Repository;
