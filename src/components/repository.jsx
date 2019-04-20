import React, { Component } from "react";

class Repository extends Component {
  state = {};
  render() {
    return (
      <div className="container repo">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://sciencespourtous.univ-lyon1.fr/files/2018/02/une-etiquette-sur-mon-profil-net.jpg"
              alt="Owner Avatar"
              width="150"
              height="150"
            />
          </div>
          <div className="col-md-10">
            <h1>Repository Name</h1>
            <p>Repository Description</p>
            <div className="row">
              <p className="col-md-1">Nb Stars</p>
              <p className="col-md-1">Nb Issues</p>
              <p className="col-md-10">Time Interval by Owner Name</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;
