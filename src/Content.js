import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { height, width } from './Dimensions'

import Icon from 'react-native-vector-icons/FontAwesome6'


const getDate = new Date();

const Content = () => {

    const [weather, setWeather] = useState(undefined);
    const [city, setCity]= useState('Lahore')


const getAPIData = async()=>{
    const apiKey = 'e08de3fb608092ec05c9a826b90648b4';

    let City = city;

    const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${apiKey}&units=metric`;

    let result = await fetch(uri);

    result = await result.json();
    setWeather(result);
}

useEffect(()=>{
    getAPIData();
},[])
//Dev branch completed
    return (
        <View style={styles.mainView}>

            <View style={styles.subView}>

                <View style={styles.topView}>

                    <Icon name='cloud-sun'
                        style={styles.Icon}
                    />

                    <Text style={styles.tempText}>
                        
                        {
                            weather? weather.list[0].main.temp : 'Loading'
                        }

                        &deg;
                    </Text>

                </View>

                <View style={styles.BottomView}>

                    <View>

                        <Text style={styles.cityName}>
                            {
                                weather ? weather.city.name : 'Loading'
                            }
                        </Text>
                        <Text style={styles.date}>
                            {
                               'Today, '+ getDate.getDate() + ' / ' + getDate.getFullYear()
                            }
                        </Text>

                    </View>

                    <View>

                        <Icon name='wind' color='#61677A' size={width * 0.2} />

                    </View>

                </View>

            </View>

        </View>
    )

}

export default Content

const styles = StyleSheet.create({
    mainView: {
        marginTop: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subView: {
        backgroundColor: '#272829',
        width: width * 0.95,
        height: height * 0.25,
        borderRadius: width * 0.05,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    topView: {
        paddingRight: width * 0.1,
        paddingTop: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Icon: {
        position: 'absolute',
        left: width * 0.15,
        top: -width * 0.07,
        fontSize: height * 0.12,
        color: '#FFED00',

    },
    tempText: {
        color: '#9cfffc',
        fontSize: width * 0.1,
        fontFamily: 'yanone'
    },

    // Bottom View Styling

    BottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cityName: {
        fontSize: width * 0.12,
        color: '#fff',
        fontFamily: 'josef'
    },
    date: {
        color: '#9cfffc',
        fontFamily: 'yanone',
        fontSize: width * 0.05
    }


})