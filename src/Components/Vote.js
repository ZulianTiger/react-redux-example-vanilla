import React, { Component } from 'react'
import { VoteContainer, Button, ButtonText } from '../Styles'

export default class Vote extends Component {

    voteReact() {
        console.log('react');
    }
    voteAngular() {
        console.log('angular');
    }

    render() {
        return (
            <VoteContainer>
                <Button onClick={this.voteReact}>
                    <ButtonText>Vote React</ButtonText>
                </Button>
                <Button onClick={this.voteAngular}>
                    <ButtonText>Vote Angular</ButtonText>
                </Button>
            </VoteContainer>
        )
    }
}