import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function SharingMethods() {
    return (
        <View>
            <Button
                title='Share link'
                color='#095797'
                onPress={() => Alert.alert('View Sharing Links.')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
})