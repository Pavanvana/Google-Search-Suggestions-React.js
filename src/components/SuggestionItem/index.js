// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestioin = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        onClick={onClickSuggestioin}
        type="button"
        className="arrow-button"
      >
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
