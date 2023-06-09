import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components 
import Header from './src/components/Header';
import AlertBanner from './src/components/AlertBanner';
import ButtonAdd from './src/components/ButtonAdd';

// Utils
import MainContent from './src/utils/MainContent';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AlertBanner />
      <Text style={styles.text}></Text>
      <ButtonAdd />
      <MainContent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  text: {
    textAlign: 'center',
  }
})