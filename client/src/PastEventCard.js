import React from "react";
import { Link } from "react-router-dom";

function PastEventCard(props) {
  const { eid, ename, eimg, edate, etime } = props.pastEvent;
  return (
    <div className="card shadow bg-light ">
      <img className="card-img-top" src={eimg} alt={ename}  height="400px"/>
      <div className="card-body">
        <h4 className="card-title">{ename}</h4>
        <p className="card-text">{edate} {etime}</p>
        <Link to={{pathname:`/pastevent/${eid}`,state:{event: props.pastEvent}}} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default PastEventCard;
