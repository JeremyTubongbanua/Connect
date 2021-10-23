

import React from 'react';
import { View, Image, Text, Pressable, Button, StyleSheet, TextInput } from 'react-native';

const NavBar = () => {

    const styles = StyleSheet.create({
        navbar: {
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            height: '10%',
            top: '90%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1,
            flexDirection: 'row',
        }
    });

    return (

        <View style={styles.navbar}>
            <Pressable><Image style={{ width: 60, height: 60, resizeMode: 'contain', }} source={require('../assets/profile.png')} /></Pressable>
            <Pressable><Image style={{ width: 60, height: 60, resizeMode: 'contain', }} source={require('../assets/events.png')} /></Pressable>
            <Pressable><Image style={{ width: 60, height: 60, resizeMode: 'contain', }} source={require('../assets/settings.png')} /></Pressable>
        </View>

    );

}


export default NavBar;