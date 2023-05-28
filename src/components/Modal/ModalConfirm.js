import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const ModalConfirm = ({ show, onClick, onClose, text }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Megerősítés</h3>
        </div>
        {text && <div className="modal-body">{text}</div>}

        <div className="modal-footer">
          {onClick && <Button type="button" className="btn-small" onClick={onClick} text="Igen" />}
          <Button type="button" className="btn-small" onClick={onClose} text="Bezár" />
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
