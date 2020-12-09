import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { TranslationsPage, Login, EventInfo } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";
import apis from "../api";
import "./app.css";

const App = () => {
  const [eventid, setEventid] = useState("");
  const [eventname, setEventname] = useState("");
  const [languages, setLanguages] = useState([]);
  const [translations, setTranslations] = useState({});

  const updateState = (id, name, langs) => {
    setEventid(id);
    setEventname(name);
    setLanguages(langs);
  };

  const updateTotals = (id, languageList) => {
    apis
      .getLanguageTotals(id)
      .then((res) => {
        let totals = res.data.data;
        let newTranslations = {};
        languageList.forEach((l) => {
          newTranslations[l] = l in totals ? totals[l] : 0;
        });
        setTranslations(newTranslations);
      })
      .catch((err) => console.error(err));
  };

  const logout = () => {
    updateState("", "", []);
    setTranslations({});
  };

  return (
    <Router>
      <NavBar eventname={eventname} logout={logout} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Login updateState={updateState} updateTotals={updateTotals} />
          )}
        />
        <Route
          path="/translations"
          exact
          render={() => (
            <TranslationsPage
              eventid={eventid}
              languages={languages}
              translations={translations}
              setTranslations={setTranslations}
            />
          )}
        />
        <Route
          path="/eventinfo"
          exact
          render={() => (
            <EventInfo eventid={eventid} updateState={updateState} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
