import React from 'react';

import MajorsDrawer from './MajorsDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProfDetailsScreen from '../../screens/ProfDetailsScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { View } from 'react-native';
const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Drawer" component={MajorsDrawer} />
            <Stack.Screen name="Details" component={ProfDetailsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};
