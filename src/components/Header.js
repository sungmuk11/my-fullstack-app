import "../scss/main.scss";
import "../scss/profile.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext.js";

const Header = () => {
  const { loggedIn, user, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className={`screen ${open ? "slide-panel-open" : ""}`}>
      <header className="header">
        <div className="desc">
          <Link to="/" className="des">
            Home
          </Link>
          <Link to="/introduce" className="des">
            Park
          </Link>
          <Link to="/des" className="des">
            Feed
          </Link>
          <Link to="/des" className="des">
            Explore
          </Link>
          <Link to="/des" className="des">
            Find
          </Link>
        </div>
        <div className="buttons">
          {loading ? (
            <span>loading...</span>
          ) : loggedIn && user ? (
            <>
              <Link to="/profile" className="user">
                {user.username}
              </Link>
            </>
          ) : (
            <>
              <Link to="/join" className="join">
                Join
              </Link>
              <Link to="/login" className="login">
                Login
              </Link>
            </>
          )}

          {open ? (
            <div className="cancel" onClick={() => setOpen(false)}>
              ✖
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faBell}
              className="bell"
              onClick={() => setOpen(true)}
            />
          )}
          <div className={`slide-panel ${open ? "open" : ""}`}>
            <ul className="rings">
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
              <Link to="/alarm" className="ring">
                <li>새로운 알림</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
