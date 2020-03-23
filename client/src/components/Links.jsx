import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EventName = styled.span`
    color: rgba(255,255,255,.5);
`

class Links extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/" className="navbar-brand">
                    Pokémon Tournament Translation Tracker
                </Link>
                <EventName>{this.props.eventname}</EventName>
            </Fragment>
        )
    }
}

export default Links