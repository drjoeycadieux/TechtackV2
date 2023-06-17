import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


export default function ButtonNav({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Go to settings"
                color="#095797"
                onPress={() => Navigation.navigate('SettingsScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
})