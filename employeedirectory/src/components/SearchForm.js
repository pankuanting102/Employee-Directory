import React, { Component }  from "react";

class SearchForm extends Component {

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("get succeed")
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    this.setState({
      searchName: "",
    });
  };
  render(){
    return (
      <form>
        <div className="form-group">
          
          <input
            // onChange={props.handleInputChange}
            // value={props.search}
            // name="search"
            // type="text"
            // className="form-control"
            // placeholder="Search for a Gif"
            // id="search"
            value={this.state.searchName}
            name="search"
            onChnage={this.handleInputChange}
            type="text"
            placeholder="Search Employee"
            id="search"
          />
          <button onClick={this.handleFormSubmit}>
            Search
          </button>
        </div>
      </form>
    );
  }

}

export default SearchForm;

// onClick={props.handleFormSubmit} className="btn btn-primary mt-3"