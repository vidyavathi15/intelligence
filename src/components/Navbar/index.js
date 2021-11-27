import './index.css'

const Navbar = props => {
  const {currentScore, initialSeconds} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo-content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-image"
        />
        <div className="content-container">
          <p className="score-value">Score: {currentScore}</p>
          <div className="timer-seconds-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon-img"
            />
            <p className="seconds-text">{initialSeconds} sec </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
