import { CurrentRenderContext } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Image, View, Button, TouchableOpacity,ScrollView, Platform } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const SignupScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={tw`py-20`} behavior={Platform.OS=='ios'?'padding':'height'}>
            <ScrollView style={tw`bg-purple-100 my-auto py-10 mx-5 rounded-xl h-full`}>
                <Image
                    source={require('../assets/bashMed.png')}
                    style={tw`mx-auto h-24 w-24`}
                />
                <TextInput
                    placeholder='Username'
                    style={tw`mt-10 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                <TouchableOpacity style={tw`mx-5 my-5 bg-purple-900 rounded-full py-3`}>
                   <Text style={tw`m-auto text-white text-sm`}>Sign up</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                   <Text style={tw`m-auto text-white text-base text-purple-900`}>Sign in instead</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

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
