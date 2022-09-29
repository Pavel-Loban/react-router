import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/apple">Apple</Link>
        </li>
        <li>
          <Link to="/apricot">Apricot</Link>
        </li>
        <li>
          <Link to="/lime">Lime</Link>
        </li>
        <li>
          <Link to="/lychee">Lychee</Link>
        </li>
      </ul>
    );
};

export default Header;