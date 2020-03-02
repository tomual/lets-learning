import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterHook from './CounterHook';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! </Text>
      <CounterHook color={'lightblue'} size={16} />
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
