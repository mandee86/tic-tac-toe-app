import React, { useState } from "react";
import { BlockPicker } from "react-color";
import "./ColorPicker.scss";

const defaultColors = [
  "#000000d4",
  "#FF6F61",
  "#697689",
  "#EFC050",
  "#2CCCE4",
  "#ba68c8",
  "#C3447A",
  "#DFCFBE",
  "#9B2335",
  "#29535d",
];

const ColorPicker = ({ color, setColor, colors = defaultColors }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  return (
    <div className="color-picker">
      <div className="swatch" onClick={handleClick}>
        <div className="color" style={{ background: color }} />
      </div>
      {showPicker ? (
        <div className="popover">
          <div className="cover" onClick={handleClose} />
          <BlockPicker color={color} onChange={(color) => setColor(color.hex)} colors={colors} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
