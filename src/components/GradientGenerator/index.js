import {Component} from 'react'

import {
  AppContainer,
  MainHeading,
  SubHeading,
  GradientDirectionList,
  InputContainer,
  InputHolder,
  LabelText,
  InputElement,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].value,
    input1: '#8ae323',
    input2: '#014f7b',
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
  }

  onClickBtn = value => this.setState({activeTab: value})

  onChangeInput1 = event => this.setState({input1: event.target.value})

  onChangeInput2 = event => this.setState({input2: event.target.value})

  generateColor = () => {
    const {input1, input2} = this.state
    this.setState({bgColor1: input1, bgColor2: input2})
  }

  render() {
    const {activeTab, input1, input2, bgColor1, bgColor2} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        linearGradient={`to ${activeTab}, ${bgColor1}, ${bgColor2}`}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SubHeading>Choose Direction</SubHeading>
        <GradientDirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientDetails={each}
              activeTab={activeTab}
              onClickBtn={this.onClickBtn}
            />
          ))}
        </GradientDirectionList>
        <SubHeading>Pick the Colors</SubHeading>
        <InputContainer>
          <InputHolder>
            <LabelText>{input1}</LabelText>
            <InputElement
              type="color"
              value={input1}
              date-testid="input1"
              onChange={this.onChangeInput1}
            />
          </InputHolder>
          <InputHolder>
            <LabelText>{input2}</LabelText>
            <InputElement
              type="color"
              value={input2}
              date-testid="input2"
              onChange={this.onChangeInput2}
            />
          </InputHolder>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateColor}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
