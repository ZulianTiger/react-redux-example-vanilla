import React, { Component } from 'react'
import { VoteContainer, Button, ButtonText } from '../Styles'
import { voteReact, voteAngular } from '../Redux/Actions'

export default class Vote extends Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    clickReact = () => {
        this.store.dispatch(voteReact());
        console.log('react score: '+this.store.getState().react);
    }
    clickAngular = () => {
        this.store.dispatch(voteAngular());
        console.log('angular score: '+this.store.getState().angular);
    }

    render() {
        return (
            <VoteContainer>
                <Button onClick={this.clickReact}>
                    <ButtonText>Vote React</ButtonText>
                </Button>
                <Button onClick={this.clickAngular}>
                    <ButtonText>Vote Angular</ButtonText>
                </Button>
            </VoteContainer>
        )
    }
}