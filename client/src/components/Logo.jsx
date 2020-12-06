import React from "react";
import styled from "styled-components";

import pokeball from "../pokeball.png"; // Source: purepng.com (CC0)

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

const Logo = () => {
  return (
    <Wrapper>
      <img src={pokeball} width="40" height="40" alt="" />
    </Wrapper>
  );
};

export default Logo;
