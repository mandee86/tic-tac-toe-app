import React, { useState } from "react";
import { SwatchesPicker } from "react-color";
import "./ColorPicker.scss";

const ColorPicker = ({ color, setColor }) => {
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
          <SwatchesPicker
            color={color}
            onChange={(color) => {
              setColor(color.hex);
              handleClose();
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
