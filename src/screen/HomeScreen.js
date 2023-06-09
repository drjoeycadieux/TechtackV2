import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                HomeScreen!
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