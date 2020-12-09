import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import pokeball from "../pokeball.png"; // Source: purepng.com (CC0)

const Wrapper = styled.div.attrs({
  className: "logo",
})``;

const Logo = styled.img`
  margin: 5px 10px 10px 10px;
`;

const Title = () => {
  return (
    <Wrapper>
      <Logo src={pokeball} width="30" height="30" alt="" />
      <Link to="/" className="navbar-brand">
        Pokémon Tournament Translation Tracker
      </Link>
    </Wrapper>
  );
};

export default Title;
