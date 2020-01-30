import React, { Component } from 'react'
import { ResultsContainer, Result, ResultText, ResultScore } from '../Styles'

export default class Vote extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    render() {
        return (
            <ResultsContainer>
                <Result>
                    <ResultText>React</ResultText>
                    <ResultScore>{this.store.getState().react}</ResultScore>
                </Result>
                <Result>
                    <ResultText>Angular</ResultText>
                    <ResultScore>{this.store.getState().angular}</ResultScore>
                </Result>
            </ResultsContainer>
        )
    }
}