import React, { Component } from 'react'
import { ResultsContainer, Result, ResultText, ResultScore } from '../Styles'

export default class Vote extends Component {
    render() {
        return (
            <ResultsContainer>
                <Result>
                    <ResultText>React</ResultText>
                    <ResultScore>0</ResultScore>
                </Result>
                <Result>
                    <ResultText>Angular</ResultText>
                    <ResultScore>0</ResultScore>
                </Result>
            </ResultsContainer>
        )
    }
}