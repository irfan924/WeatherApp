import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { height, width } from './Dimensions'

import Icon from 'react-native-vector-icons/FontAwesome6'
import Iconicon from 'react-native-vector-icons/Ionicons'

const date = new Date();


const Today = () => {

    const [weather, setWeather] = useState(undefined);
    const [city, setCity] = useState('Lahore');
    const [sunrise, setSunrise] = useState(undefined);
    const [sunset, setSunset] = useState(undefined);


    const getAPIData = async () => {
        const apiKey = 'e08de3fb608092ec05c9a826b90648b4';

        let City = city;

        const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${apiKey}&units=metric`;

        let result = await fetch(uri);

        result = await result.json();
        setWeather(result);
        if (result != null) {
            const timestampSunrise = weather.city.sunrise;
            const sunriseTime = new Date(timestampSunrise * 1000);
            const formattedTimeSunrise = sunriseTime.toLocaleTimeString([], { timeStyle: 'short' });
            setSunrise(formattedTimeSunrise)

            const timestampSunset = weather.city.sunset;
            const sunsetTime = new Date(timestampSunset * 1000);
            const formattedTimeSunset = sunsetTime.toLocaleTimeString([], { timeStyle: 'short' });
            setSunset(formattedTimeSunset)
        }
        else {
            console.log('Loading')
        }

    }


    const handleReload = () => {
        getAPIData();
    }


    useEffect(() => {
        getAPIData();
    }, [handleReload])

    return (


        <View View style={styles.mainView} >

            <View style={styles.subView}>

                <View style={styles.header}>

                    <Text style={styles.headerText}>
                        Today
                    </Text>

                    <TouchableOpacity
                        style={styles.reloadbtn}
                        onPress={handleReload}
                    >

                        <Icon name='rotate-right' size={width * 0.07} color='#fff' />

                    </TouchableOpacity>

                </View>

                <View style={styles.contentDetail}>

                    <View style={styles.content}>

                        <View style={styles.commonView}>

                            <Icon name='wind' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Haze
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? weather.list[0].wind.speed + ' km/h' : 'Loading'
                                }
                            </Text>

                        </View>

                        <View style={styles.commonView}>

                            <Icon name='droplet' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Drop
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? weather.list[0].clouds.all : 'Loading'
                                }
                            </Text>

                        </View>

                        <View style={styles.commonView}>

                            <Icon name='cloud-rain' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Cloud
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? weather.list[0].clouds.all + ' %' : 'Loading'
                                }
                            </Text>

                        </View>

                    </View>
                    <View style={styles.content}>

                        <View style={styles.commonView}>

                            <Iconicon name='partly-sunny-outline' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Sunrise
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? sunrise : 'Loading'
                                }
                            </Text>

                        </View>

                        <View style={styles.commonView}>

                            <Icon name='temperature-half' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Temp
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? weather.list[0].main.temp : 'Loading'
                                }
                                &deg;
                            </Text>

                        </View>

                        <View style={styles.commonView}>

                            <Iconicon name='partly-sunny-sharp' color='#58A0F1' size={width * 0.06} />

                            <Text style={styles.nameText}>
                                Sunset
                            </Text>

                            <Text style={styles.valText}>
                                {
                                    weather ? sunset : 'Loading'
                                }
                            </Text>

                        </View>

                    </View>



                </View>

            </View>

        </View >
    )
}

export default Today

const styles = StyleSheet.create({
    mainView: {
        marginTop: width * 0.04
    },
    subView: {
        width: width * 0.95,
        height: height * 0.3,
        borderRadius: width * 0.05,
        borderColor: '#58A0F1',
        borderWidth: 2
    },

    // Header Styling

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        marginVertical: width * 0.02,
    },
    headerText: {
        fontSize: width * 0.06,
        fontFamily: 'robotoM'
    },
    reloadbtn: {
        backgroundColor: '#58A0F1',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // Content Deatils Text

    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: height * 0.1,
        alignItems: 'center',
        marginVertical: width * 0.02
    },
    commonView: {
        alignItems: 'center',
        gap: width * 0.015
    },
    nameText: {
        fontSize: width * 0.05,
        fontFamily: 'robotoR',
    },
    valText: {
        fontSize: width * 0.04,
        fontWeight: '900',
        color: '#000'
    }


});