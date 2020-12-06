import React, { useState, useEffect } from "react";
import TranslationsInsert from "./TranslationsInsert";
import TranslationsList from "./TranslationsList";
import apis from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 200px 40px 200px;
`;

const TranslationsPage = ({
  eventid,
  languages,
  translations,
  setTranslations,
}) => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    console.log(translations);
  }, [translations]);

  // On load, fetch the log
  useEffect(() => {
    console.log("Fetching the log");
    const payload = { n: 10 };
    apis
      .getLatest(eventid, payload)
      .then((res) => {
        console.log(res.data.data);
        setLog(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [eventid]);

  // Add x to (or deduct from, if x is negative) the language total
  const updateTotal = (language, x) => {
    let newTranslations = { ...translations };
    newTranslations[language] += x;
    setTranslations(newTranslations);
  };

  const addToLog = (translation) => {
    const newLog = [translation, ...log]; // The newest translation goes first
    setLog(newLog);
  };

  const removeFromLog = (id) => {
    const newLog = log.filter((l) => l._id !== id);
    setLog(newLog);
  };

  return (
    <Wrapper>
      <TranslationsInsert
        eventid={eventid}
        languages={languages}
        translations={translations}
        updateTotal={updateTotal}
        addToLog={addToLog}
      />
      <TranslationsList
        log={log}
        removeFromLog={removeFromLog}
        updateTotal={updateTotal}
      />
    </Wrapper>
  );
};

export default TranslationsPage;
