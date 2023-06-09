import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function AlertBanner() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Visit techtack-technologies website.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#DF5D33',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    }
})