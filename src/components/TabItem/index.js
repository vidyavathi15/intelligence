import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props

  const {tabId, displayText} = tabDetails

  const activeBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={activeBtnClassName}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
