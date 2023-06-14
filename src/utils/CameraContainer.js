import React from 'react';
import { useState } from 'react';


//React Native
import { View, StyleSheet } from 'react-native';

// Expo
import { Camera, CameraType } from 'expo-camera';


export default function CameraUsing() {
    const [type, setType] = useState(CameraType.back)
    const [permission] = Camera.useCameraPermissions();

    function ToggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (!permission)

        if (!permission.granted)

            return (
                <View style={styles.container}>
                    <Camera type={type}>
                        Open Camera
                    </Camera>
                </View>
            )
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
    },
})