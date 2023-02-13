import React from "react";

function Header({ text }) {
  const headerStyles = {
    backgroundColor: "lightblue",
    color: "black"
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h3>{text}</h3>
        <p> In Header Class/Function</p>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI"
};

/*
Header.propTypes = {
  text: PropTypes.string,
}
*/

export default Header;
