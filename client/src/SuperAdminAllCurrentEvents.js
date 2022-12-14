import React from "react";
import SuperAdminNavigation from "./SuperAdminNavigation";
import { Consumer } from "./context";
import SuperAdminCurrentEventCard from "./SuperAdminCurrentEventCard";

function SuperAdminAllCurrentEvents(props) {
  return (
    <Consumer>
      {(value) => {
        const sortedCurrentEvents  = props.location.state;
        return (
          <div>
          <SuperAdminNavigation/>
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All Current Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedCurrentEvents.map((currentEvent) => (
                <div key={currentEvent.eid} className="col-12 col-md-6 py-3">
                  <SuperAdminCurrentEventCard currentEvent={currentEvent} />
                </div>
              ))}
            </div>  
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SuperAdminAllCurrentEvents;
