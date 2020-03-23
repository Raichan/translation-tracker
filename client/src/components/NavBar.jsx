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
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links eventname={this.props.eventname}/>
                </Nav>
            </Container>
        )
    }
}

export default NavBar