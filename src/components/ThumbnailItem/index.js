import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setThumbnailScore} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickThumbnailImage = () => {
    setThumbnailScore(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailImage}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
