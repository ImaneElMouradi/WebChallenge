import React, { Component } from "react";

class Repository extends Component {
  state = {};
  render() {
    const { isLoading, repositories, error } = this.props;

    return (
      <React.Fragment>
        {error ? <p>We have encountered an error</p> : null}

        {!isLoading ? (
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
                <hr />
                <p>
                  Haec igitur lex in amicitia sanciatur, ut neque rogemus res
                  turpes nec faciamus rogati. Turpis enim excusatio est et
                  minime accipienda cum in ceteris peccatis, tum si quis contra
                  rem publicam se amici causa fecisse fateatur. Etenim eo loco,
                  Fanni et Scaevola, locati sumus ut nos longe prospicere
                  oporteat futuros casus rei publicae. Deflexit iam aliquantum
                  de spatio curriculoque consuetudo maiorum.
                </p>
                <div className="row">
                  <p className="col-md-1">Nb Stars</p>
                  <p className="col-md-1">Nb Issues</p>
                  <p className="col-md-10">Time Interval by Owner Name</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="load">LOADING...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Repository;
