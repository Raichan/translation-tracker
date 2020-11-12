import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 200px 40px 200px;
  text-align: center;
`;

const Form = styled.form.attrs({
  className: "form-inline justify-content-center",
})`
  margin-bottom: 20px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "", // Form field
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Automatic login if key exists
    /*if ("eventcode" in localStorage) {
      window.location.href = `/translations`;
    }*/
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api.getEventByCode(this.state.value).then((eventInfo) => {
      this.props.setCode(eventInfo.data.data.eventcode);
      this.props.setName(eventInfo.data.data.name);
      this.props.setLanguages(eventInfo.data.data.languages);
      this.setState({ redirect: true }); // Redirect after getting the event
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/translations" />;
    }
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <InputText
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Event code"
        />
        <input type="submit" className="btn btn-danger" value="Login" />
      </Form>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
    };
  }

  render() {
    return (
      <Wrapper>
        <EventForm
          setCode={this.props.setCode}
          setName={this.props.setName}
          setLanguages={this.props.setLanguages}
        />
        <Link to="/eventinfo">
          <button type="button" className="btn btn-outline-secondary">
            New event
          </button>
        </Link>
      </Wrapper>
    );
  }
}

export default Login;
