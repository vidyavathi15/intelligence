import './index.css'

const Navbar = props => {
  const {currentScore, initialSeconds} = props
  return (
    <nav className="nav-bar-container">
      <ul className="nav-bar-list-container">
        <li className="logo-content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo-image"
          />
          <li className="content-container">
            <p className="score-value">Score: {currentScore}</p>
            <div className="timer-seconds-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-icon-img"
              />
              <p className="seconds-text">{initialSeconds} sec </p>
            </div>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
