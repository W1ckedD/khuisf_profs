import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity as TO } from 'react-native';
import { PRIMARY_COLOR } from '../../../global/colors';
import { Feather } from '@expo/vector-icons';
import { Context as NavContext } from '../../context/NavigationContext';
const Header = props => {
 
    return (
        <View style={styles.header}>
            <TO onPress={props.openSettings} activeOpacity={0.8}>
                <Feather name="settings" size={30} color="white" />
            </TO>
            <Text style={styles.title}>سامانه اساتید</Text>
            <TO onPress={props.toggleDrawer} activeOpacity={0.8}>
                {/* <Feather name="menu" size={30} color="white" /> */}
            </TO>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 16,
        width: '100%',
        height: 120,
        backgroundColor: PRIMARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'samim',
        fontSize: 24,
        color: 'white'
    }
});

export default Header;
