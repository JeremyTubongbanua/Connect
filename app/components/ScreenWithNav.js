

import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './NavBar';

const ScreenWithNav = ({ screen }) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ borderWidth: 1, borderColor: 'red', height: '90%', }}>{screen}</View>
            <NavBar />
        </View>
    );

}

export default ScreenWithNav