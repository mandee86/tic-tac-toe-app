import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ show, onClick, btnText, onClose, title, text }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
          </div>
        )}
        {text && <div className="modal-body">{text && text}</div>}
        <div className="modal-footer">
          {onClick && <Button type="button" className="btn-small" onClick={onClick} text={btnText && btnText} />}
          <Button type="button" className="btn-small" onClick={onClose} text="Bezár" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
