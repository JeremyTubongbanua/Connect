
import React from 'react';
import { View, Image, Text, Pressable, Button, StyleSheet, TextInput } from 'react-native';

const Socials = ({ onContinuePress }) => {

    const styles = StyleSheet.create({
        mainView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        textInput: {
            height: 50,
            width: 250,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },

    });

    return (
        <View style={styles.mainView}>
            <View style={{ bottom: '15%' }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 48, textAlign: 'center', }}>Add Socials</Text>
                <Text style={{ fontFamily: 'Roboto Light', fontSize: 16, textAlign: 'center', }}>You will be sharing these at events</Text>
            </View>
            <View style={{}}>
                <TextInput placeholder={"Instagram"} style={styles.textInput} />
                <TextInput placeholder={"Twitter"} style={styles.textInput} />
                <TextInput placeholder={"LinkedIn"} style={styles.textInput} />
            </View>
            <Pressable onPress={onContinuePress} style={{ top: '20%' }}>
                <Image style={{
                    width: 300,
                    height: 137,
                    resizeMode: 'contain',
                }} source={require('../assets/continue.png')} />
            </Pressable>
        </View>
    );
}

export default Socials;