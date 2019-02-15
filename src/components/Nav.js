import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  return (
    <div>
      <nav>
        <img id="logo" alt="logo" src={props.logo} />
        <Link to="casestudy">Work</Link>
        <li>
          <a>Contact</a>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
