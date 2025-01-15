import GameState from "./GameState";
import './style.css';
function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default Reset;