import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';


export default function AddProof() {
    return (
        <View style={styles.container}>
            <Button
                title="Add"
                color="#095797"
                onPress={() => Alert.alert('Here will be a place for adding a proof.')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})