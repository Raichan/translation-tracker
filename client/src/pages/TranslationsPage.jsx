import React, { Component } from "react";
import TranslationsInsert from "./TranslationsInsert";
import TranslationsList from "./TranslationsList";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 200px 40px 200px;
`;

class TranslationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translations: [],
      languages: [],
    };

    this.updateTable = this.updateTable.bind(this);
  }

  setLanguages = (list) => {
    console.log(list);
    console.log(this.state.languages);
    this.setState({ languages: list });
    console.log(this.state.languages);
  };

  setTranslations = (list) => {
    this.setState({ translations: list });
  };

  componentDidMount = async () => {
    // TODO get translations by event code
    await api.getAllTranslations().then((translations) => {
      let storageLanguages = [];
      if (localStorage.getItem("languages") !== null) {
        storageLanguages = localStorage.getItem("languages").split(",");
      }
      let languageList = [];

      storageLanguages.forEach((item, i) => {
        let translationList = translations.data.data.filter(
          (t) => t.language === item
        );
        let language = {
          name: item,
          total: translationList.length,
        };
        languageList.push(language);
      });
      this.setLanguages(languageList);
      this.setTranslations(translations.data.data);
    });
  };

  updateTable() {
    api.getAllTranslations().then((translations) => {
      console.log(translations.data.data.length);
      this.setTranslations(translations.data.data);
    });
  }

  render() {
    return (
      <Wrapper>
        <TranslationsInsert
          eventcode={this.props.eventcode}
          languages={this.state.languages}
          updateTable={this.updateTable}
        />
        <TranslationsList
          translations={this.props.translations}
          updateTable={this.updateTable}
        />
      </Wrapper>
    );
  }
}

export default TranslationsPage;
