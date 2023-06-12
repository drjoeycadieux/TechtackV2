import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components 
import Header from './src/components/Header';
import AlertBanner from './src/components/AlertBanner';
import ButtonAdd from './src/components/ButtonAdd';
import AddProof from './src/components/AddProof';

// Utils
import MainContent from './src/utils/MainContent';
import MainText from './src/utils/MainText';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AlertBanner />
      <View style={styles.textcontent}>
        <Text style={styles.text}>What's hapennig to build what's next</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>TeamLitho | Developer</Text>
      </View>
      <ButtonAdd />
      <AddProof />
      <MainContent />
      <MainText />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 23,
  },
  textcontent: {
    padding: 15,
  },
  content: {
    padding: 5,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
  }
})