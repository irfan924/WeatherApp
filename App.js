
import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './src/Header';
import { height, width } from './src/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Today from './src/Today';
import WeekWeather from './src/WeekWeather';
import Content from './src/Content';

function App() {

  const handleSearch = () => {
    Alert.alert('Search Button Press');
  }
  

  return (
    <View>
      <LinearGradient
        colors={['#9cfffc', '#d3ffff', '#d5fcfb']}
        style={styles.mainView}
      >
        <StatusBar barStyle={'dark-content'} backgroundColor={'#9cfffc'} />

        {/* Header Component */}

        <Header/>

        {/* Content Component */}

        <Content/>

        {/* Today Weather Data  */}

        <Today/>

        {/* complete Week Weather Data */}

        <WeekWeather/>


      </LinearGradient>

      

    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: width * 0.02,
    width: width * 1,
    height: height * 1,
  }
});

export default App;


