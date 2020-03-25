import React from 'react';
import { Input, Container } from '@material-ui/core';

const LoginScreen = props => {
    return(
        <Container>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
        </Container>
    )
}

export default LoginScreen;