import './index.css'

const ScoreCard = props => {
  const {currentScore, playAgain} = props

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="score-label">Your Score</p>
      <p className="score-count">{currentScore}</p>
      <button type="button" className="play-agin-btn" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        Play Again
      </button>
    </div>
  )
}

export default ScoreCard
