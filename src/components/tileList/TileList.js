import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.list.map((item, index) => {
        return <Tile item={item} key={index} />;
      })}
    </div>
  );
};
