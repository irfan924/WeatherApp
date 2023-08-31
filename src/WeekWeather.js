import React, { useState, useEffect } from 'react'
import { height, width } from './Dimensions'
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import DailyWeather from './DailyWeather';



const WeekWeather = () => {

    const date = new Date();

    return (

        <View style={styles.mainView}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >



                <DailyWeather
                    dayName={'MON'}
                    date={'28/08'}
                    iconName={'cloud'}
                    iconColor={'#58A0F1'}
                    temp={20}
                />

                <DailyWeather
                    dayName={'TUE'}
                    date={'29/08'}
                    iconName={'sun'}
                    iconColor={'#FF9B50'}
                    temp={'37'}
                />

                <DailyWeather
                    dayName={'WED'}
                    date={'30/08'}
                    iconName={'sun'}
                    iconColor={'#FF9B50'}
                    temp={'30'}
                />

                <DailyWeather
                    dayName={'THU'}
                    date={'31/08'}
                    iconName={'cloud-rain'}
                    iconColor={'#58A0F1'}
                    temp={'17'}
                />

                <DailyWeather
                    dayName={'FRI'}
                    date={'01/09'}
                    iconName={'cloud-sun'}
                    iconColor={'#FF9B50'}
                    temp={'27'}
                />

                <DailyWeather
                    dayName={'SAT'}
                    date={'02/09'}
                    iconName={'cloud'}
                    iconColor={'#58A0F1'}
                    temp={'20'}
                />

                <DailyWeather
                    dayName={'SUN'}
                    date={'03/09'}
                    iconName={'cloud-sun'}
                    iconColor={'#FF9B50'}
                    temp={'27'}
                />

            </ScrollView>

        </View>
    )
}

export default WeekWeather

const styles = StyleSheet.create({
    mainView: {
        marginTop: width * 0.02
    },


});