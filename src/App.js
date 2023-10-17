import { useState } from 'react';
import Menu from './pages/Menu/Menu';
import Game from './pages/Game/Game';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import scores from './data/scores.json';

function App() {
  const [gameMode, setGameMode] = useState('menu');

  if (localStorage.getItem('scores') === null) {
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  function setGameModeGame() {
    setGameMode('game');
  }

  function setGameModeMenu() {
    setGameMode('menu');
  }


  function setGameModeLeaderboard() {
    setGameMode('leaderboard');
  }

  return (
    <div className="App">
      {gameMode === 'menu' && <Menu
        handleClickGame={setGameModeGame}
        handleClickLeaderboard={setGameModeLeaderboard}
      />}
      {gameMode === 'game' && <Game
        handleClickMenu={setGameModeMenu}
        handleClickLeaderboard={setGameModeLeaderboard}
      />}
      {gameMode === 'leaderboard' && <Leaderboard
        handleClickMenu={setGameModeMenu}
      />}
    </div>
  );
}

export default App;
