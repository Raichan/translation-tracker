import React, { Component } from 'react'
import api from '../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const ButtonsComponent = styled.div`
    margin: 0 0 40px 0;
`

const LanguageButtons = styled.div`
    margin: 10px 0 0 10px;
    text-align: center;
`

const NameButton = styled.button`
    min-width: 200px;
`

const TotalButton = styled.button`
    min-width: 100px;
    margin-right: 5px;
`

class InsertButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventcode: this.props.eventcode,
            language: this.props.language,
            total: 0
        }
     }

    addTranslation = async () => {
        const eventcode = this.state.eventcode
        const language = this.state.language
        const payload = { eventcode, language }

        await api.insertTranslation(payload).then(res => {
            window.alert(`Translation added successfully`)
            this.setState(prevState => {
                return {total: prevState.total + 1}
             })
             window.location.reload()
        })
    }

    render() {
        return (
            <LanguageButtons>
                <div className="btn-group" role="group" aria-label="Language">
                        <NameButton type="button" className="btn btn-outline-primary">
                            {this.state.language}
                        </NameButton>
                        <TotalButton type="button" className="btn btn-outline-primary">
                            {this.state.total}
                        </TotalButton>
                </div> 
                <button type="button" className="btn btn-success" onClick={this.addTranslation.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>     
            </LanguageButtons>
        )
    }
}

class TranslationsInsert extends Component {
    render() {
        return (
            <ButtonsComponent>
                <InsertButton eventcode={this.props.eventcode} language='Japanese'/>
                <InsertButton eventcode={this.props.eventcode} language='Korean'/>
            </ButtonsComponent>
        )
    }
}

export default TranslationsInsert