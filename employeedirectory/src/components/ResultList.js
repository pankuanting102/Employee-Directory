import React from "react";

function ResultList(props) {
  console.log(props.results.results)
  return (
    <ul className="list-group">
    {props.results.results.map(result => (
      <div className="list-group-item" key={result.id}>
        <img alt={result.name} className="img-fluid" src={result.picture.large} />
        <div>{result.name.first} {result.name.last}</div>
        <div>{result.phone}</div>
        <div>{result.dob.date.slice(0,10)}</div>
      </div>
      
    ))}
  </ul>


  );
}

export default ResultList;
