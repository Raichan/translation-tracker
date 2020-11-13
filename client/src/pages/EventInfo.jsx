import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

import styled from "styled-components";

const Title = styled.h4.attrs({
  className: "h4",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  padding: 20px 200px 40px 200px;
  margin: 0 30px;
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

class EventInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newevent: this.props.eventcode === "" ? true : false,
      eventcode: localStorage.getItem("eventcode") || "",
      eventname: localStorage.getItem("eventname") || "",
      languagelist:
        localStorage.getItem("languages") !== null
          ? localStorage.getItem("languages").replaceAll(",", ", ")
          : "",
    };
  }

  handleChangeEventCode = async (event) => {
    const eventcode = event.target.value;
    this.setState({ eventcode });
  };

  handleChangeName = async (event) => {
    const eventname = event.target.value;
    this.setState({ eventname });
  };

  handleChangeLanguages = async (event) => {
    const languagelist = event.target.value;
    this.setState({ languagelist });
  };

  handleEditEvent = async () => {
    const { eventcode, name, languagelist } = this.state;
    const trimmedlist = languagelist.replace(" ", "");
    const languages = trimmedlist.split(",");
    const payload = { eventcode, name, languages };

    if (this.state.newevent) {
      await api.insertEvent(payload).then((res) => {
        window.location.href = "/";
      });
    } else {
      await api
        .updateEventById("5fad2c8d2deab00738abe62f", payload)
        .then((res) => {
          window.location.href = "/translations";
        });
    }
  };

  render() {
    const { eventcode, eventname, languagelist } = this.state;
    return (
      <Wrapper>
        <Title>Edit event information</Title>
        <Label>Event code: </Label>
        <InputText
          type="text"
          value={eventcode}
          onChange={this.handleChangeEventCode}
        />
        <Label>Name: </Label>
        <InputText
          type="text"
          value={eventname}
          onChange={this.handleChangeName}
        />
        <Label>Languages: </Label>
        <InputText
          type="text"
          value={languagelist}
          onChange={this.handleChangeLanguages}
        />
        <Button onClick={this.handleEditEvent}>Save event</Button>
        <CancelButton to={this.state.newevent ? "/" : "/translations"}>
          Cancel
        </CancelButton>
      </Wrapper>
    );
  }
}

export default EventInfo;
