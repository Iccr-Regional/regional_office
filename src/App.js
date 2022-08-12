import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PastEventPage from "./PastEventPage";
import CurrentEventPage from "./CurrentEventPage";
import AllCurrentEvents from "./AllCurrentEvents";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import FutureEventPage from "./FutureEventPage";
import { Provider } from "./context";
import AllPastEvents from "./AllPastEvents";
import AllFutureEvents from "./AllFutureEvents";
import AllRegionalOffices from "./AllRegionalOffices";
import RegionalOfficePage from "./RegionalOfficePage";
import AddEvent from "./AddEvent";
import AddRegionalOffice from "./AddRegionalOffice";
import Login from "./Login";
import ScrollToTop from "./ScrollToTop";
import AdminHomePage from "./AdminHomePage";
import SuperAdminAddEvent from "./SuperAdminAddEvent";
import SuperAdminHomePage from "./SuperAdminHomePage";
import Support from "./Support";
import Contact from "./Contact";
import AdminAllCurrentEvents from "./AdminAllCurrentEvents";
import SuperAdminAllCurrentEvents from "./SuperAdminAllCurrentEvents";
import SuperAdminAllRegionalOffices from "./SuperAdminAllRegionalOffices";
import AdminAllRegionalOffices from "./AdminAllRegionalOffices";
import Footer from "./footer";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/admin" component={AdminHomePage}/>
          <Route exact path="/superadmin" component={SuperAdminHomePage}/>
          <Route exact path="/allpastevents" component={AllPastEvents}/>
          <Route exact path="/allcurrentevents" component={AllCurrentEvents}/>
          <Route exact path="/admin/allcurrentevents" component={AdminAllCurrentEvents}/>
          <Route exact path="/superadmin/allcurrentevents" component={SuperAdminAllCurrentEvents}/>
          <Route exact path="/allregionaloffices" component={AllRegionalOffices}/>
          <Route exact path="/admin/allregionaloffices" component={AdminAllRegionalOffices}/>
          <Route exact path="/superadmin/allregionaloffices" component={SuperAdminAllRegionalOffices}/>
          <Route exact path="/allfutureevents" component={AllFutureEvents} />
          <Route exact path="/pastevent/:id" component={PastEventPage} />
          <Route exact path="/currentevent/:id" component={CurrentEventPage}/>
          <Route exact path="/futureevent/:id" component={FutureEventPage} />
          <Route exact path="/regionaloffice/:id" component={RegionalOfficePage} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/addregionaloffice" component={AddRegionalOffice} />
          <Route exact path="/addevents" component={SuperAdminAddEvent}/>
          <Route exact path="/superadminadd" component={SuperAdminAddEvent}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound} />

         
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

