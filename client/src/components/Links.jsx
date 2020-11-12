import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const NavbarItem = styled.span`
    color: rgba(255,255,255,.5);
    margin-right: 20px;
`

// Remove key on logout
function clearLocalStorage(){
    localStorage.clear();
}

class Links extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventname: this.props.eventname
        }
    }
    
    render() {
        return (
            <Fragment>
                <Link to="/" className="navbar-brand">
                    Pokémon Tournament Translation Tracker
                </Link>
                    <Fragment>
                        <NavbarItem>{this.state.eventname}</NavbarItem>
                        <Link to="/" onClick={clearLocalStorage}><NavbarItem>
                            <FontAwesomeIcon icon={faSignOutAlt} title="Log out"/>
                            </NavbarItem>
                        </Link>
                    </Fragment>  
            </Fragment>
        )
    }
}

export default Links