import React, { useState } from "react";

import NavLink from "./components/NavLink";
import NavLogo from "./components/NavLogo";
import NavService from "./components/NavService";

import "./Header.scss";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false);

  const toggleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <header>
        <div className="container wide">
          <NavLink />
          <NavLogo />
          <NavService
            toggleShowCategory={toggleShowCategory}
            showCategory={showCategory}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
