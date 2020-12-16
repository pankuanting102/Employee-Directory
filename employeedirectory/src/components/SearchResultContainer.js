import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import TopNav from "./Nav"
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchKey: ""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getUsers()
    .then(res => {
      console.log(res.data)
      this.setState({ allUsers: res.data });
    })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <TopNav/>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.allUsers} />
      </div>
    );
  }
}

export default SearchResultContainer;
