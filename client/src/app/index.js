import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TranslationsPage, Login } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const eventcode = 'worlds2020';
    const eventname = 'World Championships 2020'
    return (
        <Router>
            <NavBar eventname={eventname}/>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route
                    path="/translations"
                    exact render={(props) => 
                    <TranslationsPage {...props} eventcode={eventcode} />}
                />
            </Switch>
        </Router>
    )
}

export default App