import React from "react";


const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav mr-auto-right" alt="fireSpot">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "CryptoBot"
};

export default Header;
