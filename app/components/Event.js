

import React from 'react';
import { View, Image, Text, Pressable, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';

const Event = ({ title, startTime, endTime }) => {

    const styles = StyleSheet.create({
        event: {
            backgroundColor: '#EFFFEE',
            flex: 1,
            width: '80%',
        }
    });

    return (
        <View style={styles.event}>
            <Text>Test</Text>
        </View >
    );
}

export default Event;