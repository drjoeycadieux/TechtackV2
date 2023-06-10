import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';


export default function ButtonNav() {
    return (
        <View style={styles.container}>
            <Button
                title="Go to settings"
                color="#095797"
                onPress={() => Alert.alert('To another page.')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
})