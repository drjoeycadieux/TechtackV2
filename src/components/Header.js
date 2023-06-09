import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import AddProof from './AddProof';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Techtack Technologies  <AddProof /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 45,
        backgroundColor: '#144696',
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    }
})