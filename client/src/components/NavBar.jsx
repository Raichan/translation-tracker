import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})``;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark",
})`
  background-color: darkred;
`;

const NavBar = ({ eventname, logout }) => {
  return (
    <Container>
      <Nav>
        <Logo />
        <Links eventname={eventname} logout={logout} />
      </Nav>
    </Container>
  );
};

export default NavBar;
