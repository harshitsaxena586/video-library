import React from "react";
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/52a100676f64b5bf89afb1f5a8692244a457dc84/cba32/logo.d166859b.svg"
          alt="logo"
        />
      </div>

      <ul class="list-tag">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="category">Category </Link>
        </li>
        <li className="">
          {" "}
          <Link to="playlists">Playlists </Link>
        </li>
      </ul>
    </nav>
  );
}
