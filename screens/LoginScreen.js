import { CurrentRenderContext } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Image, View } from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView >
            <View style={styles.formContainer}>
                <Image
                    source={require('../assets/bashMed.png')}
                />
                <TextInput
                    placeholder='Username'
                    
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor:'#8B7DF923',
        margin: 20,
        height: '80%',
        width:'90%',
        justifyContent: 'center',
        // alignSelf: 'center',
        alignContent: 'center',
        justifyContent:'flex-start',
        padding:20,
        borderRadius:10
    }
})
