import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavbarItem = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
`;

const EventName = styled(Link).attrs({
  className: "eventname",
})`
  margin: 20px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Logout = styled.div`
  margin-left: auto;
`;

const Links = ({ eventname, logout }) => {
  let logoutLink = (
    <Logout>
      <Link to="/" onClick={() => logout()}>
        <NavbarItem>
          <FontAwesomeIcon icon={faSignOutAlt} title="Log out" />
        </NavbarItem>
      </Link>
    </Logout>
  );

  return (
    <Fragment>
      <Link to="/" className="navbar-brand">
        Pokémon Tournament Translation Tracker
      </Link>
      <NavbarItem>
        <EventName to="/eventinfo">{eventname}</EventName>
      </NavbarItem>
      {eventname !== "" ? logoutLink : ""}
    </Fragment>
  );
};

export default Links;
