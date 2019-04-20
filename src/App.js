import React, { Component } from "react";
import "./App.css";
import Repository from "./components/repository";

class App extends Component {
  state = {
    isLoading: false,
    repositories: [],
    error: null
  };

  render() {
    const { isLoading, repositories, error } = this.state;

    return (
      <Repository
        isLoading={isLoading}
        repositories={repositories}
        error={error}
      />
    );
  }
}

export default App;
