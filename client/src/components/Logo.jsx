import React, { Component } from "react";
import styled from "styled-components";

import pokeball from "../pokeball.png"; // Source: purepng.com (CC0)

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <img src={pokeball} width="40" height="40" alt="" />
      </Wrapper>
    );
  }
}

export default Logo;
