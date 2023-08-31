import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from './Dimensions'

import LinearGradient from 'react-native-linear-gradient'

import Icon from 'react-native-vector-icons/FontAwesome6'

const DailyWeather = ({dayName, date, iconName, iconColor, temp}) => {
  return (
    <View>
      
      <LinearGradient style={styles.subView}
                    colors={['#d5fcfb', '#d3ffff', '#9cfffc']}
                >
                    <View>
                        <Text style={styles.dayName}>
                            {dayName}
                        </Text>
                        <Text style={styles.date}>
                            {date}
                        </Text>
                    </View>

                    <Icon name={iconName} size={width * 0.09} color={iconColor} />

                    <Text style={styles.temp}>
                        {temp}
                        &deg;C
                    </Text>

                </LinearGradient>

    </View>
  )
}

export default DailyWeather

const styles = StyleSheet.create({
    subView: {
        backgroundColor: 'grey',
        width: width * 0.2,
        height: height * 0.25,
        borderRadius: width * 0.1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: width * 0.05,
        borderWidth: 1,
        borderColor: '#58A0F1'
    },
    dayName: {
        color: '#000',
        fontFamily: 'robotoM',
        fontSize: width * 0.06
    },
    date: {
        textAlign: 'center',
        fontSize: width * 0.04,
        fontFamily: 'blackOps'
    },

    temp: {
        color: '#000',
        fontFamily: 'robotoM',
        fontSize: width * 0.05
    }
})