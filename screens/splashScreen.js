import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = () => {
    return (
        <View>
            <Image
                source={require('../assets/bashMed.png')}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
