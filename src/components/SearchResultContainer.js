import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import TopNav from "./Nav";
import "../styles/TableTitle.css";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchName: "",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      this.setState({
        allUsers: res.data.results,
        filteredUsers: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state.searchName);
        console.log(this.state.allUsers);
        const filtered = this.state.allUsers.filter((result) =>
          result.name.first.includes(this.state.searchName)
        );
        console.log(filtered);
        this.setState({
          filteredUsers: filtered,
        });
      }
    );
  };

  handleSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const sorted = this.state.allUsers.sort((a, b) => a.name.first.localeCompare(b.name.first))
    console.log(sorted)
    console.log("clicked")
    this.setState({
      filteredUsers: sorted,
    });
  };

  render() {
    return (
      <div>
        <TopNav />
        <div className="wrapper">
        <form>
          <input
            value={this.state.searchName}
            name="searchName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search Employee"
          />
        </form>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="table-title col-1">Image</div>
            <div className="table-title click col-3" onClick={this.handleSubmit}>Name</div>
            <div className="table-title col-3">Phone Number</div>
            <div className="table-title col-3">Email</div>
            <div className="table-title col-2">DOB</div>
          </div>
          <hr className="rule"></hr>
        </div>
        <ResultList results={this.state.filteredUsers} />
      </div>
    );
  }
}

export default SearchResultContainer;
