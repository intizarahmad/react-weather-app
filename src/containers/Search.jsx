import React from "react";

class Search extends React.Component {
  render() {
    return <div className="container">
      <form action="#" className="find-location">
        <input type="text" placeholder="Find your location..." />
        <input type="submit" defaultValue="Find" />
      </form>
    </div>;
  }
}

export default Search;