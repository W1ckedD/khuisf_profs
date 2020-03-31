import React from 'react';
import { View, Text, TouchableOpacity as TO, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../components/header/Header';
const BachelorsScreen = props => {
    return (
        <View>
            <TO onPress={() => props.navigation.toggleDrawer()} style={styles.menu}>
                <Feather name="menu" size={30} />
            </TO>
            <Text>BachelorsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        right: 10,
        width: 30,
        height: 30
    }
});

export default BachelorsScreen;
