import React, { Component } from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const ButtonsComponent = styled.div`
  margin: 0 0 40px 0;
`;

const LanguageButtons = styled.div`
  margin: 10px 0 0 10px;
  text-align: center;
`;

const NameButton = styled.button`
  min-width: 200px;
`;

const TotalButton = styled.button`
  min-width: 100px;
  margin-right: 5px;
`;

class InsertButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventcode: this.props.eventcode,
      language: this.props.language,
      total: this.props.total,
    };
  }

  addTranslation = async () => {
    const eventcode = this.state.eventcode;
    const language = this.state.language;
    const payload = { eventcode, language };

    await api.insertTranslation(payload).then((res) => {
      this.setState((prevState) => {
        return { total: prevState.total + 1 };
      });
      this.props.updateTable();
    });
  };

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
        <button
          type="button"
          className="btn btn-success"
          onClick={this.addTranslation.bind(this)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </LanguageButtons>
    );
  }
}

class TranslationsInsert extends Component {
  render() {
    const languagelist = this.props.languages.map((lang) => (
      <InsertButton
        eventcode={this.props.eventcode}
        language={lang.name}
        total={lang.total}
        updateTable={this.props.updateTable}
      />
    ));
    return <ButtonsComponent>{languagelist}</ButtonsComponent>;
  }
}

export default TranslationsInsert;
