import React from "react";

const Tile = props => {
  const { icon, number, text } = props;
  return (
    <div className="tile">
      <div className="icon">{icon}</div>
      <div className="number">{number}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Tile;