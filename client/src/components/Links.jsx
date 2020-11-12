import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavbarItem = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 20px;
`;

const EventName = styled(Link)`
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

class Links extends Component {
  render() {
    let logout = "";
    if (this.props.eventname !== "") {
      logout = (
        <Logout>
          <Link
            to="/"
            onClick={() => {
              this.props.logout();
            }}
          >
            <NavbarItem>
              <FontAwesomeIcon icon={faSignOutAlt} title="Log out" />
            </NavbarItem>
          </Link>
        </Logout>
      );
    }

    return (
      <Fragment>
        <Link to="/" className="navbar-brand">
          Pokémon Tournament Translation Tracker
        </Link>
        <Fragment>
          <NavbarItem>
            <EventName to="/eventinfo">{this.props.eventname}</EventName>
          </NavbarItem>
          {logout}
        </Fragment>
      </Fragment>
    );
  }
}

export default Links;
