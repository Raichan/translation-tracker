import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api";

import styled from "styled-components";

const Title = styled.h4.attrs({
  className: "h4",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  padding: 20px 0;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled(Link).attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
  text-decoration-color: none;
`;

const EventInfo = ({ eventid, updateState }) => {
  const history = useHistory();
  const [codefield, setCodefield] = useState("");
  const [namefield, setNamefield] = useState("");
  const [languagelist, setLanguagelist] = useState("");

  // On page load, load event info if editing an existing event
  useEffect(() => {
    api
      .getEventById(eventid)
      .then((res) => {
        let result = res.data.data;
        setCodefield(result["eventcode"]);
        setNamefield(result["name"]);
        setLanguagelist(result["languages"].join(", "));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [eventid]);

  const handleEditEvent = () => {
    const trimmedlist = languagelist.replaceAll(" ", "");
    const languages = trimmedlist.split(",");
    const payload = {
      eventcode: codefield,
      name: namefield,
      languages: languages,
    };

    if (eventid) {
      api.updateEventById(eventid, payload).then((res) => {
        console.log(res);
        let result = res.data.data;
        updateState(result._id, result.name, result.languages);
        history.push("/translations");
      });
    } else {
      api.insertEvent(payload).then((res) => {
        history.push("/");
      });
    }
  };

  return (
    <Wrapper>
      <Title>{eventid ? "Edit event information" : "Create an event"}</Title>
      <Label>Event code </Label>
      <InputText
        type="text"
        value={codefield}
        onChange={(event) => setCodefield(event.target.value)}
      />
      <Label>Name </Label>
      <InputText
        type="text"
        value={namefield}
        onChange={(event) => setNamefield(event.target.value)}
      />
      <Label>Languages </Label>
      <InputText
        type="text"
        value={languagelist}
        onChange={(event) => setLanguagelist(event.target.value)}
      />
      <Button onClick={handleEditEvent}>Save event</Button>
      <CancelButton to={eventid ? "/translations" : "/"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default EventInfo;
