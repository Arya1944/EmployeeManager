import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavbarEmployee from "./components/navbarEmployee";
import Employees from "./components/employees";
import NotFound from "./common/notFound";
import NewEmployee from "./components/newEmployee";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarEmployee />
        <div className="content">
          <Switch>
            <Route path="/employees" component={Employees} />
            <Route path="/newEmployee" component={NewEmployee} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/" exact to="/employees" />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
