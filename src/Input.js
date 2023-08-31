import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { height, width } from './Dimensions'

import Icon from 'react-native-vector-icons/FontAwesome6'

const Input = ({onPress, onChangeText, value,}) => {
    return (
        <View style={styles.mainView}>

            <TextInput

                placeholder='City Name'
                placeholderTextColor={'#58A0F1'}
                style={styles.input}

                onChangeText={onChangeText}
                value={value}
                

            />

            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.search}>
                    Search
                </Text>

                <Icon name='magnifying-glass' color= '#58A0F1' size={width*0.07} />
                
            </TouchableOpacity>

        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    
    input: {
        width: width*0.7,
        backgroundColor: '#fff',
        borderRadius: width*0.02,
        fontSize: width*0.05,
        fontFamily: 'robotoR',
        paddingLeft: width*0.03,
        marginBottom: width*0.05,
        color: '#58A0F1'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width*0.7,
        height: height*0.06,
        backgroundColor: '#fff',
        borderRadius: width*0.02,
    },
    search: {
        fontSize: width*0.06,
        color: '#58A0F1',
        fontFamily: 'robotoR'
    }
})