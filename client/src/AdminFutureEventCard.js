import React from "react";
import { Link } from "react-router-dom";

function AdminFutureEventCard(props) {
  const { eid, ename, eimg, edate, etime } = props.futureEvent;
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={eimg} alt={ename} />
      <div className="card-body">
        <h4 className="card-title">{ename}</h4>
        <p className="card-text">{edate} {etime}</p>
        <Link to={{pathname:`/admin/futureevent/${eid}`,state:{event:props.futureEvent}}} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default AdminFutureEventCard;