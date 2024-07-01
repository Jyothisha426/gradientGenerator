import {ListItem, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, activeTab, onClickBtn} = props
  const {value, displayText} = gradientDetails
  const btnClick = () => onClickBtn(value)
  const isActive = activeTab === value
  return (
    <ListItem>
      <ButtonItem
        as="button"
        type="button"
        onClick={btnClick}
        isActive={isActive}
      >
        {displayText}
      </ButtonItem>
    </ListItem>
  )
}

export default GradientDirectionItem
