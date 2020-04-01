import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import { styles } from '../../global/styles';

const SettingsScreen = () => {
    const [ip, setIp] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const fetchIp = async () => {
        const ip = await AsyncStorage.getItem('ip');
        setIp(ip);
    };
    useEffect(() => {
        fetchIp();
    }, []);
    const assignIp = async () => {
        if (!text) {
            setError('لطفا آدرس معتبر وارد نمایید');
            return;
        }
        AsyncStorage.setItem('ip', text.trim());
        alert('آدرس با موفقیت ثبت شد');
    };
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>تنظیمات</Text>
            <Input
                placeholder="مثال: 192.168.1.101"
                label="آدرس ip سرور مورد نظر را وارد کنید"
                onChangeText={txt => {
                    setError('');
                    setText(txt);
                }}
                value={text}
            />
            <Text style={styles.error}>{error}</Text>
            <Button title="ذخیره ip" onPress={assignIp} />
            <Text style={styles.p}>آدرس فعلی: {ip}</Text>
        </View>
    );
};

export default SettingsScreen;
