import React, { Component } from 'react'
import TranslationsInsert from './TranslationsInsert'
import TranslationsList from './TranslationsList'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 20px 200px 40px 200px;
`

class TranslationsPage extends Component {
    render() {
        return (
            <Wrapper>
                <TranslationsInsert eventcode={this.props.eventcode} />
                <TranslationsList></TranslationsList>
            </Wrapper>
        )
    }
}

export default TranslationsPage
