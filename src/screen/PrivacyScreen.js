import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrivacyScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                PrivacyScreen!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    }
})