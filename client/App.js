import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom fonts
import * as Font from 'expo-font';

export default function App() {
  
  useEffect(() => {
    Font.loadAsync({
      'samim': require('./assets/Samim.ttf')
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontFamily: 'samim'}} >سلام</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
