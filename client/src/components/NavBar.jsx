import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Links from "./Links";

const Nav = styled.nav.attrs({
  className: "navbar navbar-dark",
})`
  background-color: darkred;
`;

const NavBar = ({ eventname, logout }) => {
  let links = <Links eventname={eventname} logout={logout} />;

  return (
    <Nav>
      <Title />
      {eventname !== "" ? links : ""}
    </Nav>
  );
};

export default NavBar;
