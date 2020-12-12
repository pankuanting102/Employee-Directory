import React from "react";
import "./App.css";
function FormInput() {
   return <div>form input</div>;
}
function UsersView( props) {
   // props: users (filteredUsers)
   // button to filter by name 
      // onClick -> this.sortUsers
   return <div>users view</div>;
}
class App extends React.Component {
   state = {
      allUsers: [],
      filteredUsers: [],
      searchTerm: ""
   }
   // component did mount
      // call API (utils)
         // setState
            // allUsers: [],
            // filteredUsers: [],
   // handleInputChange
      // change (setState) searchTerm
      // filter users based on searchTerm
      // sort if relevant
   // sortUsers
      // using js sort (by string, or if you want to sort by number (DOB))
      // optionally implement, up or down
   render(){
      return (
         <div className="App">
            <FormInput />
            <UsersView />
         </div>
      );
   }
}
export default App;