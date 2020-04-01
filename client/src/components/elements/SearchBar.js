import React from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const SearchBar = props => {
    return (
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={{ ...styles.input, ...props.style }}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize={props.autoCapitalize}
                placeholder={props.placeholder}
                onBlur={() => Keyboard.dismiss()}
                onEndEditing={() => Keyboard.dismiss()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        width: WIDTH - 64,
        backgroundColor: '#eee',
        elevation: 4,
        fontFamily: 'samim',
        fontSize: 18,
        padding: 8,
        textAlign: 'right'
    },
    icon: {
    }
});

export default SearchBar;
