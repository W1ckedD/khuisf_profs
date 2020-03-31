import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom fonts
import * as Font from 'expo-font';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/components/navigators/ScreenStack';
import { navigationRef } from './src/rootNavigation';
import * as rootNavigation from './src/rootNavigation';
import Header from './src/components/header/Header';
// Context
import { Provider as NavProvider } from './src/context/NavigationContext';

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        Font.loadAsync({
            samim: require('./assets/fonts/Samim.ttf'),
            samimBold: require('./assets/fonts/Samim-Bold.ttf')
        }).then(() => setFontLoaded(true));
    }, []);
    if (!fontLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <NavigationContainer ref={navigationRef}>
            <Header
                openSettings={() => props.navigation.navigate('Settings')}
            />
            <ScreenStack />
        </NavigationContainer>
    );
};

export default () => {
    return (
        <NavProvider>
            <App />
        </NavProvider>
    );
};
