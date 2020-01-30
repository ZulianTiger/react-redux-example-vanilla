import React, { Component } from 'react'
import { VoteContainer, Button, ButtonText } from '../Styles'

export default class Vote extends Component {
    render() {
        return (
            <VoteContainer>
                <Button>
                    <ButtonText>Vote React</ButtonText>
                </Button>
                <Button>
                    <ButtonText>Vote Angular</ButtonText>
                </Button>
            </VoteContainer>
        )
    }
}