import React from 'react';
import MajorsDrawer from './MajorsDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProfDetailsScreen from '../../screens/ProfDetailsScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import DownloadFileScreen from '../../screens/DownloadFileScreen';
import Header from '../header/Header';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator screenOptions={{ header: (props) => <Header {...props}/> }}>
            <Stack.Screen name="Drawer" component={MajorsDrawer} />
            <Stack.Screen name="Details" component={ProfDetailsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Download" component={DownloadFileScreen} />
        </Stack.Navigator>
    );
};
