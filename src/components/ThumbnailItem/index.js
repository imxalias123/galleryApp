// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, clickThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem

  const updateThumbNail = () => {
    clickThumbnail(id)
  }

  return (
    <li className="each-thumbNail">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={updateThumbNail}
          className="thumb-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
