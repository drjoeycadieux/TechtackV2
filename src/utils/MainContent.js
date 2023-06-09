import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainContent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Techtack Technologies Mobile Apps - Thats Under Development. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: '#9A9B9D',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
})