import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import TopNav from "./Nav";
import TableTitle from "./TableTitle";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchName: ""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getUsers()
      .then(res => {
        console.log(res.data.results)
        this.setState(
          { filteredUsers: res.data.results });
      })
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log(this.state.searchName)
    const filtered = this.state.filteredUsers.filter(result => result.name.first.includes(this.state.searchName))
    console.log(filtered)
    this.setState({
      filteredUsers: filtered,
    })
    if (this.state.searchName == null)
    this.setState({
      filteredUsers: []
    })
  };


  render() {
    return (
      <div>
        <TopNav />
        <form>
          <input
            value={this.state.searchName}
            name="searchName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search Employee"
          />

        </form>
        <TableTitle />
        <ResultList results={this.state.filteredUsers}/>
      </div>
    );
  }
}

export default SearchResultContainer;
