import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabScreen from './Components/TabScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TabScreen />
      </View>
    </Provider>
  );
}