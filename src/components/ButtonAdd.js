import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';


export default function ButtonAdd() {
    return (
        <View style={styles.container}>
            <Button
                title="Scan Code"
                color="#144696"
                onPress={() => Alert.alert('Here will be a qr code to scan.')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})