import React from "react";
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
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Logout = styled.span`
  margin-left: auto;
`;

const Links = ({ eventname, logout }) => {
  return (
    <div>
      <NavbarItem>
        <EventName to="/eventinfo">{eventname}</EventName>
      </NavbarItem>
      <Logout>
        <Link to="/" onClick={() => logout()}>
          <NavbarItem>
            <FontAwesomeIcon icon={faSignOutAlt} title="Log out" />
          </NavbarItem>
        </Link>
      </Logout>
    </div>
  );
};

export default Links;
