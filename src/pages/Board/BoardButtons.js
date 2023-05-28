import React, { useState } from "react";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import Button from "../../components/Button/Button";

const BoardButtons = ({ restartGame, resetGame, quitGame, isGameOver }) => {
  // modals
  // reset, restart, quit game, winner and game over modal
  const [showResetMd, setShowResetMd] = useState(false);
  const [showRestarttMd, setShowRestartMd] = useState(false);
  const [showQuitMd, setShowQuitMd] = useState(false);

  return (
    <div>
      <div className="board-buttons v-centered">
        <div>
          <Button type="button" onClick={() => (isGameOver ? restartGame() : setShowRestartMd(true))} text="újra" />
        </div>
        <div>
          <Button
            type="button"
            onClick={() => (isGameOver ? resetGame() : setShowResetMd(true))}
            text="új beállítások"
          />
        </div>
        <div>
          <Button type="button" onClick={() => (isGameOver ? quitGame() : setShowQuitMd(true))} text="kilépés" />
        </div>
      </div>
      {/* modals */}
      <ModalConfirm
        show={showRestarttMd}
        onClick={() => {
          setShowRestartMd(false);
          restartGame();
        }}
        onClose={() => setShowRestartMd(false)}
        text="Ha újraindítod, a jelenlegi játék elveszik. Biztos vagy benne?"
      />
      <ModalConfirm
        show={showResetMd}
        onClick={() => {
          setShowResetMd(false);
          resetGame();
        }}
        onClose={() => setShowResetMd(false)}
        text="Ha új beállításokat adsz meg, a jelenlegi játék elveszik. Biztos vagy benne?"
      />

      <ModalConfirm
        show={showQuitMd}
        onClick={() => {
          setShowQuitMd(false);
          quitGame();
        }}
        onClose={() => setShowQuitMd(false)}
        text="Ha kilépsz, a jelenlegi játék elveszik. Biztos vagy benne?"
      />
    </div>
  );
};

export default BoardButtons;
