
import React from 'react';
import { View, Image, Text, Pressable, Button, StyleSheet, TextInput } from 'react-native';
import NavBar from '../components/NavBar';
import Event from '../components/Event';
import ScreenWithNav from '../components/ScreenWithNav';

const Events = () => {

    return (
        <ScreenWithNav screen={
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <Event />
                <Event />
                <Event />
                <Event />
            </View>
        } />
    );

}

export default Events;