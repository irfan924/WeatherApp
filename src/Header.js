import React, { useState } from 'react'
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { height, width } from './Dimensions'
import LinearGradient from 'react-native-linear-gradient'
import BackButton from './BackButton'
import Input from './Input'

const Header = ({ onChangeText, onPress }) => {

    const [toggle, setToggle] = useState(true);

    const handleLightMode = () => {
        setToggle(!toggle)
    }


    const handleNightMode = () => {
        setToggle(!toggle)
    }

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true)
    }

    const handleSearch = () => {
        { onPress }
        setShowModal(false)
    }


    return (
        <View>
            <View style={styles.commonView}>

                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={handleModal}
                >

                    <Icon name='list-ul' size={width * 0.06} color='#000' />

                </TouchableOpacity>

                <LinearGradient
                    style={styles.toggleView}
                    colors={['#67E1D2', '#58A0F1']}
                >

                    <View style={styles.dot}>

                    </View>

                    {
                        toggle ?

                            <TouchableOpacity
                                style={styles.lightIcon}
                                onPress={handleLightMode}
                            >

                                <Icon name='sun' size={20} color='#5AB9F3' />

                            </TouchableOpacity>

                            :
                            <TouchableOpacity
                                style={styles.darkIcon}
                                onPress={handleNightMode}
                            >

                                <Icon name='moon' size={20} color='#5AB9F3' />

                            </TouchableOpacity>
                    }



                </LinearGradient>

            </View>


            <Modal
                animationType='slide'
                visible={showModal}
                style={styles.modal}
                transparent={true}
            >
                <LinearGradient
                    style={styles.modalStyle}
                    colors={['#67E1D2', '#58A0F1',]}
                >

                    <BackButton
                        onPress={() => setShowModal(false)}
                    />

                    <Text style={styles.weatherText}>
                        Weather App
                    </Text>

                    <Input
                        onChangeText={onChangeText}
                        onPress={handleSearch}
                    />

                    <View style={styles.textView}>
                        <Text style={styles.createdBy}>
                            Created By
                        </Text>
                        <Text style={styles.name}>
                            Irfan Abbas
                        </Text>
                    </View>


                </LinearGradient>
            </Modal>


        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    commonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuBtn: {
        backgroundColor: '#fff',
        width: width * 0.1,
        height: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.05,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    toggleView: {
        width: width * 0.2,
        height: width * 0.08,
        borderRadius: width * 0.04,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
    },
    lightIcon: {
        backgroundColor: '#fff',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkIcon: {
        backgroundColor: '#000',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#fff',
        width: width * 0.04,
        height: width * 0.04,
        borderRadius: width * 0.02,
        position: 'absolute',
        left: width * 0.03,
        opacity: 0.7
    },

    // Modal Styling

    modalStyle: {
        width: width * 0.8,
        height: height * 1,
        borderTopRightRadius: width * 0.5,
        padding: width * 0.03,
        position: 'relative'
    },
    weatherText: {
        marginVertical: width * 0.1,
        fontSize: width * 0.1,
        fontFamily: 'robotoM',
        color: '#fff'
    },
    textView: {
        position: 'absolute',
        bottom: height*0.1,
        left: width*0.3
    },
    createdBy: {
        fontSize: width*0.03,
        textAlign: 'center'
    },
    name: {
        fontSize: width*0.04,
        fontFamily: 'robotoM',
        color: '#fff'
    }

})