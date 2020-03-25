import React, { useContext } from 'react';
import {
    Context as AuthContext,
    Provider as AuthProvider
} from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import './App.css';

function App() {
    const { state } = useContext(AuthContext);
    console.log(state);
    return (
        <div className="App">
            <LoginScreen />
        </div>
    );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
