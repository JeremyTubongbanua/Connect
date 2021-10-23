import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ onLoginPress }) => {

    const styles = StyleSheet.create({

        mainView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        connectworkTitle: {
            fontSize: 48,
            fontFamily: 'Roboto Light',
        },

        connectworkSubTitle: {
            fontSize: 24,
            fontFamily: 'Roboto Light',
            textAlign: 'center',
        },

        image: {
        },
    });

    return (
        <View style={styles.mainView}>
            <View style={{ bottom: '20%' }}>
                <Text style={styles.connectworkTitle}>CONNECTWORK</Text>
            </View>
            <View style={{ bottom: '17%', maxWidth: '70%' }}>
                <Text style={styles.connectworkSubTitle}>Easy networking at events</Text>
            </View>
            <Pressable onPress={onLoginPress} style={{ top: '20%' }}>
                <Image style={{
                    width: 350,
                    height: 120,
                    resizeMode: 'contain',
                }} source={require('../assets/google.png')} />
            </Pressable>
        </View>
    );
}

export default WelcomeScreen;