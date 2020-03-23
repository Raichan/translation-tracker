import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 20px 200px 40px 200px;
    text-align: center;
`

class Login extends Component {
    render() {
        return (
            <Wrapper>
                <Link to="/translations">
                    <button type="button" className="btn btn-danger">Login</button>
                </Link>
            </Wrapper>
        )
    }
}

export default Login
