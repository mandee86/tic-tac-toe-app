import React from "react";
import Button from "../../components/Button/Button";

const BoardForm = ({ onCreateBoard, size, setSize, savedSize, showSize }) => {
  return (
    <div className="w-500">
      <div className="card h-100">
        <div className="card-header text-center">
          <h2 className="m-0">Pálya</h2>
          <span>(minimum 5, maximum 50)</span>
        </div>

        <form onSubmit={(e) => onCreateBoard(e)}>
          <div className="form-inputs">
            <div className="form-item">
              <label htmlFor="boardSize">
                Pálya mérete<sup className="text-red">*</sup>
              </label>
              <input
                name="boardSize"
                id="boardSize"
                type="number"
                min="5"
                max="50"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            {/* show the user the saved board size */}
            {showSize ? `Pálya (${savedSize}X${savedSize})` : null}
          </div>

          {/* save board button */}
          <div className="card-footer">
            <Button type="submit" text="Hozzáadás" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardForm;
