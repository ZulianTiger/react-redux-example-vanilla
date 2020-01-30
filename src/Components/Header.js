import React, { Component } from 'react'
import { HeaderContainer, Header, Description } from '../Styles'

export default class ContactForm extends Component {
    render() {
        return (
            <HeaderContainer>
                <Header>React Redux Example</Header>
                <Description>A simple example of using Redux with React for better state management</Description>
            </HeaderContainer>
        )
    }
}