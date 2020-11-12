import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark',
})`
    background-color: darkred;
`

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventname: this.props.eventname
        }
        console.log('navbar event name: ' + this.state.eventname)
     }

    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links eventname={this.state.eventname}/>
                </Nav>
            </Container>
        )
    }
}

export default NavBar