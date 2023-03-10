import './index.css'

const ButtonItem = props => {
  const {buttonDetails, activeButton, updatePresentTabDetails} = props
  const {buttonText, index} = buttonDetails
  const activeButtonClass = activeButton ? 'active-button' : ''

  const onButtonClick = () => {
    updatePresentTabDetails(index)
  }

  return (
    <li>
      <button
        onClick={onButtonClick}
        className={`language-button ${activeButtonClass}`}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
