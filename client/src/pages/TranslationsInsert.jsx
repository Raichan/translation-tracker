import React from "react";
import apis from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const ButtonsComponent = styled.div`
  margin: 0 0 40px 0;
`;

const LanguageButtons = styled.div`
  margin: 10px 0 0 0px;
  text-align: center;
`;

const NameButton = styled.button`
  min-width: 200px;
`;

const TotalButton = styled.button`
  min-width: 100px;
  margin-right: 5px;
`;

const TranslationsInsert = ({
  eventid,
  languages,
  translations,
  updateTotal,
  addToLog,
}) => {
  const InsertButton = ({ language, total }) => {
    const addTranslation = () => {
      const payload = { eventid, language };

      apis
        .insertTranslation(payload)
        .then((res) => {
          updateTotal(language, 1);
          addToLog(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return (
      <LanguageButtons>
        <div className="btn-group" role="group" aria-label="Language">
          <NameButton type="button" className="btn btn-outline-primary">
            {language}
          </NameButton>
          <TotalButton type="button" className="btn btn-outline-primary">
            {total}
          </TotalButton>
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addTranslation()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </LanguageButtons>
    );
  };

  return (
    <ButtonsComponent>
      {languages.map((lang) => (
        <InsertButton
          key={lang}
          eventid={eventid}
          language={lang}
          total={translations[lang] || 0}
        />
      ))}
    </ButtonsComponent>
  );
};

export default TranslationsInsert;
