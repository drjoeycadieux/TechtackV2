import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function MainText() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>With Content Technology, we enable Media Companies, Educational organisations, Corporate Institutions and Retailers engage their customers and staff by creating workflow solutions that create content, manage content, distribute content and analyse content.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 18,
        fontWeight: 'bold',
    }
})