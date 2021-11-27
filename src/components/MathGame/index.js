import {Component} from 'react'

import Navbar from '../Navbar'
import ThumbnailItem from '../ThumbnailItem'
import ScoreCard from '../ScoreCard'
import TabItem from '../TabItem'



class MathGame extends Component {
    
    const {imagesList, tabsList}= this.props


  state = {
    imageUrl: imagesList[0].imageUrl,
    mathGameList: [],
    activeTabId: tabsList[0].tabId,
    initialSeconds: 60,
    isGameInProgress: true,

    componentWillUnMount() {
      this.clearingTimer()
    },
  }

  clearingTimer = () => this.clearUInterval(this.IntervalId)

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredThumbnails = () => {
    const {imagesList, activeTabId} = this.state

    const filteredThumbnails = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )
    return filteredThumbnails
  }

  finishGameAndStopTimer = () => {
    this.clearInterval(this.IntervalId)
    this.setState({isGameInProgress: false})
  }

  setThumbnailScore = id => {
    const {initialSeconds} = this.state

    if (initialSeconds === 0) {
      this.finishGameAndStopTimer()
    } else {
      if (randomImagesList.id !== id) {
        this.finishGameAndStopTimer()
      }

      this.setState(prevState => ({
        mathGameList: [...prevState.mathGameList, id],
      }))
    }
  }

  getRandomImagesList = imagesList =>
    (result = imagesList.sort(() => Math.random() - 0.5))

  renderImagesListView = () => {
    const {tabsList, imagesList} = this.props

    const randomImagesList = this.getRandomImagesList(imagesList)
    const {imageUrl} = randomImagesList
    const filteredThumbnails = this.getFilteredThumbnails()

    return (
      <div className="images-container">
        <img src={imageUrl} alt="match" className="matched-image" />
        <ul className="tabs-list">
          {tabsList.map(eacTabItem => (
            <TabItem
              key={eachTabItem.TabId}
              tabDetails={eachTabItem}
              isActive={activeTabId === eachTabItem.tabId}
              setActiveTabId={this.setActiveTabId}
            />
          ))}
        </ul>
        <ul className="thumbnail-list">
          {filteredThumbnails.map(each => (
            <ThumbnailItem
              key={each.id}
              thumbnailDetails={each}
              setThumbnailScore={this.setThumbnailScore}
            />
          ))}
        </ul>
      </div>
    )
  }

  restGame = () => {
    this.setState({
      imageUrl: imagesList[0].imageUrl,
      mathGameList: [],
      activeTabId: tabsList[0].tabId,
      initialSeconds: 60,
      isGameInProgress: false,
    })
  }

  renderScoreCardView = () => {
    const {mathGameList} = this.state
    return (
      <ScoreCard currentScore={mathGameList.length} playAgain={this.restGame} />
    )
  }

  render() {
    const {mathGameList, initialSeconds, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <Navbar
          currentScore={mathGameList.length}
          initialSeconds={initialSeconds}
        />
        <div className="mathGame-body">
          {isGameInProgress
            ? this.renderImagesListView()
            : this.renderScoreCardView()}
        </div>
      </div>
    )
  }
}

export default MathGame
