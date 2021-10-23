import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Socials from './app/screens/Socials'

const App = () => {

  const handleLoginPress = () => {
    setContent(<Socials />);
  }

  const [content, setContent] = useState(<WelcomeScreen onLoginPress={handleLoginPress} />);

  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: "#C0BBFF",
      flex: 1,
      flexDirection: 'column',
      maxHeight: 926,
      maxWidth: 428,
      width: '100%',
      height: '100%',
      top: 50,
      bottom: 50,
      left: 50,
    },
  });


  return (
    <View style={styles.mainView}>
      {content}
    </View>
  );
}

export default App;