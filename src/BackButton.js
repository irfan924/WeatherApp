import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome6'
import { width } from './Dimensions'
import LinearGradient from 'react-native-linear-gradient'


const BackButton = ({ onPress }) => {
    return (
        <View>

            <TouchableOpacity
                onPress={onPress}
                style={styles.btn}
            >

                <Icon name='angle-left' size={width * 0.08} color='#fff' />

            </TouchableOpacity>

        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#58A0F1',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    }
})