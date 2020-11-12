import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { TranslationsPage, Login, EventInfo } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

/*function eventSet() {
  // ...
}

function checkEvent(nextState, replace) {
  if (!eventSet()) {
    replace({
      pathname: "/",
    });
  }
}*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventcode: localStorage.getItem("eventcode") || "",
      eventname: localStorage.getItem("eventname") || "",
      languages: [],
    };
    let languagelist = localStorage.getItem("languages");
    if (languagelist !== null) {
      this.setLanguages(languagelist.split(","));
    }

    this.setCode = this.setCode.bind(this);
    this.setName = this.setName.bind(this);
    this.setLanguages = this.setLanguages.bind(this);
  }

  setCode = (code) => {
    this.setState({ eventcode: code });
    localStorage.setItem("eventcode", code);
  };

  setName = (name) => {
    this.setState({ eventname: name });
    localStorage.setItem("eventname", name);
  };

  setLanguages = (list) => {
    this.setState({ languages: list });
    localStorage.setItem("languages", list.join(","));
  };

  logout = () => {
    localStorage.clear();
    this.setState({ id: "", eventcode: "", eventname: "", translations: [] });
  };

  render() {
    return (
      <Router>
        <NavBar eventname={this.state.eventname} logout={this.logout} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Login
                {...props}
                setCode={this.setCode}
                setName={this.setName}
                setLanguages={this.setLanguages}
              />
            )}
          />
          <Route
            path="/translations"
            //onEnter={checkEvent}
            exact
            render={(props) => (
              <TranslationsPage
                {...props}
                eventcode={this.state.eventcode}
                languages={this.state.languages}
              />
            )}
          />
          <Route
            path="/eventinfo"
            exact
            render={(props) => (
              <EventInfo
                {...props}
                eventcode={this.state.eventcode}
                eventname={this.state.eventname}
                languages={this.state.languages}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
