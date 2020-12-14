import React from "react";

function ResultList(props) {
  const profile = props.results.results
  return (
    <ul>
    {profile ? profile.map(result => (
      <div className="list-group-item" key={profile.forEach((item, i) => {
        item.id = i + 1;
      })}>
        <img alt="1" className="img-fluid" src={result.picture.large} />
        <div>{result.name.first} {result.name.last}</div>
        <div>{result.phone}</div>
        <div>{result.dob.date.slice(0,10)}</div>
      </div>
      
    )) : "Loaging..."}
  </ul>


  );
}

export default ResultList;
