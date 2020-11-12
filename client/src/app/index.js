import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TranslationsPage, Login, EventInfo } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function eventSet() {
    // ...
}
  
function checkEvent(nextState, replace) {
    if (!eventSet()) {
        replace({
            pathname: '/'
        })
    }
}
/*
function App() {
    const eventcode = 'worlds2020';
    const eventname = 'World Championships 2020'
    return (
        <Router>
            <NavBar eventname={eventname}/>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route
                    path="/translations" onEnter={checkEvent}
                    exact render={(props) => 
                    <TranslationsPage {...props} eventcode={eventcode} />}
                />
                <Route path="/eventinfo" exact component={EventInfo} />
            </Switch>
        </Router>
    )
}*/

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        eventcode: localStorage.getItem('eventcode') || '',
        eventname: '',
        translations: []
      };
      console.log('event name: ' + this.state.eventname)
    }

    setName = (name) => {
        console.log('set name: ' + name)
        this.setState({ eventname: name });
    }

    render() {
      return (
        <Router>
            <NavBar eventname={this.state.eventname}/>
            <Switch>
                <Route
                    path="/"
                    exact render={(props) => 
                    <Login {...props} setName={this.setName} />}
                />
                <Route
                    path="/translations" onEnter={checkEvent}
                    exact render={(props) => 
                    <TranslationsPage {...props} eventcode={this.state.eventcode} />}
                />
                <Route path="/eventinfo" exact component={EventInfo} />
            </Switch>
        </Router>
      );
    }
  }

export default App