import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
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

const ErrorText = styled.div`
  color: red;
  margin: 20px;
`;

const Login = ({ updateState, updateTotals }) => {
  const [error, setError] = useState("");

  const EventForm = () => {
    const history = useHistory();
    const [code, setCode] = useState("");

    const handleChange = (event) => {
      setCode(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      api
        .getEventByCode(code)
        .then((eventInfo) => {
          let result = eventInfo.data.data;
          updateState(result._id, result.name, result.languages);

          history.push("/translations");
        })
        .catch((err) => {
          setError("Server connection failed. Try again later.");
          console.log(err);
        });
    };

    return (
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          value={code}
          onChange={handleChange}
          placeholder="Event code"
        />
        <input type="submit" className="btn btn-danger" value="Login" />
      </Form>
    );
  };

  return (
    <Wrapper>
      <EventForm />
      <Link to="/eventinfo">
        <button type="button" className="btn btn-outline-secondary">
          New event
        </button>
      </Link>
      {error !== "" ? <ErrorText>{error}</ErrorText> : ""}
    </Wrapper>
  );
};

export default Login;
