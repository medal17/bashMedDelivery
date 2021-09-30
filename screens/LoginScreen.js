// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Image, View, Button, TouchableOpacity, Platform } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const LoginScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={tw`py-20`} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`bg-purple-100 my-auto mx-5 rounded-xl h-full`}>
                <Image
                    source={require('../assets/bashMed.png')}
                    style={tw`mx-auto mt-10`}
                />
                <TextInput
                    placeholder='Username'
                    style={tw`mt-10 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('homeScreen')} style={tw`mx-5 my-5 bg-purple-900 rounded-full py-3`}>
                   <Text style={tw`m-auto text-white text-sm`}>Login</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                   <Text style={tw`m-auto text-white text-base text-purple-900`}>Sign up instead</Text>
                </TouchableOpacity>
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
