// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Image, View, Button, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';


const ProfileScreen = ({navigation}) => {
    const [picture, setPicture]=useState('');
    const [isEditing, setIsediting]=useState(false);
    return (
        <KeyboardAvoidingView style={tw`py-20 `} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`bg-white my-auto mx-5 rounded-xl px-5 py-5 h-full`}>
                <View style={tw`justify-between flex-row`}>
                    <Text></Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('homeScreen')}>
                        <AntIcon name='closecircleo' style={tw`text-red-900 `} size={24} />
                    </TouchableOpacity>
                </View>
                
                { picture=='' ?
                    <View style={ tw`text-indigo-900 w-20 h-20 rounded-full mx-auto  bg-gray-200`}>
                        <Icon size={32} name='user-alt'  style={ [tw`text-indigo-900 justify-center m-auto`]} />
                    </View>
                    :
                    <Image
                    source={require('../assets/bashMed.png')}
                    style={tw`mx-auto mt-10 rounded-full h-20 w-20`}
                />
                }
                
    {isEditing ?
            <View>
                <View style={tw`mt-10 pl-2`}>
                    <Text style={tw` mx-6 my-1 text-sm font-bold text-gray-700`}>Address</Text>
                    <TextInput
                        placeholder='Address'
                        style={tw`py-2 bg-gray-100 mx-5 pl-2`}
                    />
                </View>

                <View style={tw`mt-3 pl-2`}>
                    <Text style={tw` mx-6 my-1 text-sm font-bold text-gray-700`}>Username</Text>
                    <TextInput
                        placeholder='Username'
                        style={tw`py-2 bg-gray-100 mx-5  pl-2`}
                    />
                </View>
                
                <View style={tw`mt-3 pl-2`}>
                    <Text style={tw` mx-6 my-1 text-sm font-bold text-gray-700`}>Password</Text>
                    <TextInput
                        placeholder='*******'
                        style={tw`py-2 bg-gray-100 mx-5  pl-2`}
                    />
                </View>
                </View> : 
                <View style={tw`mx-auto`}>
                    <Text style={tw`my-6 mx-auto text-lg font-bold text-indigo-900`}>Bolaji Kareem</Text>
                    <View >
                        <Text style={tw` mx-auto text-sm font-bold text-gray-900`}>Address</Text>
                        <Text style={tw`mb-5 mx-auto text-lg text-indigo-900`}>123, Ikorodu road, Lagos</Text>
                    </View>
                    <View >
                        <Text style={tw`mx-auto text-sm font-bold text-gray-900`}>Email</Text>
                        <Text style={tw`mb-5 mx-auto text-lg text-indigo-900`}>Bolajikareem@gmail.com</Text>
                    </View>
                    <View >
                        <Text style={tw`mx-auto text-sm font-bold text-gray-900`}>Username</Text>
                        <Text style={tw`mb-5 mx-auto text-lg text-indigo-900`}>Bj-Kareem</Text>
                    </View>
                    <View >
                        <Text style={tw`mx-auto text-sm font-bold text-gray-900`}>Password</Text>
                        <Text style={tw`mb-5 mx-auto text-lg font-bold text-indigo-900`}>*******</Text>
                    </View>
                </View>
                }
                
                <TouchableOpacity onPress={()=>setIsediting(!isEditing)} style={tw`mx-5 my-8 bg-purple-900 rounded-full py-3`}>
                   <Text style={tw`m-auto text-white text-sm`}>{isEditing ? 'Update' : 'Edit'}</Text>
                </TouchableOpacity>
                
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen

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
