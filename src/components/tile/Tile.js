import React from "react";

export const Tile = (props) => {
  let items = Object.values(props.item);
  return (
    <div className="tile-container">
      {items.map((item, index) => {
        return (
          <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
