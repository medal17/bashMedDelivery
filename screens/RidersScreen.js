// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView,TextInput, Image, View, Button, TouchableOpacity, Platform, TouchableHighlight, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Appbar} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';

const data=  [
    {
      id: '1',
      title: 'Hey',
      text: 'lorem ipsum',
      price: 100,
    },
    {
      id: '2',
      title: 'Hey',
      text: 'lorem ipsum ',
      price: 200,
    },
    {
      id: '3',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      price: 200,
      image:'../assets/splash.png'
    },
    {
      id: '4',
      title: 'Hey',
      text: 'lorem ipsum .M',
      price: 200,
      image:'../assets/splash.png'
    },{
      id: '5',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      price: 200,
      image:'../assets/splash.png'
    },{
      id: '6',
      title: 'Hey',
      text: 'lorem ipsum lorem ipsum',
      price: 200,
      image:'../assets/splash.png'
    },
  ]
const RidersScreen = ({navigation}) => {
    return (
        <SafeAreaView style={tw`bg-gray-200 h-full`} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`flex-row justify-between px-5 mb-9`}> 
                <View style={tw`flex-row`}>
                    <Ionicon name="chevron-back" size={22} style={tw`bg-white px-2 py-2 rounded-md`} /> 
                    <Text style={tw` my-auto ml-10 text-indigo-900 font-bold text-xl`}>Dispatchers</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Ionicon name="search" size={22} style={tw`px-2 mr-5 py-2`} />
                    <Ionicon name="cart-outline" size={22} style={tw`bg-white px-2 py-2 rounded-md`} />
                </View>
            </View>
            <View>
            </View>
            <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                contentContainerStyle={styles.container}
                
                // scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentOffset={1}
                renderItem={
                    ({item}) => (
                        <View style={tw`bg-white my-1 mx-5 rounded-2xl h-20 flex-row justify-between px-5`}>
                            <View style={tw`flex-row`}>
                                <Image
                                    source={require('../assets/bashMed.png')}
                                    style={tw` my-auto h-10 w-10 rounded-full`}
                                />
                                <Text style={tw` my-auto ml-3 text-indigo-900 font-bold text-base`}>{item.title}</Text>
                            </View>
                            
                            
                            <View style={tw`flex-row`}>
                                <Ionicon name="location" size={25} style={tw`pl-2 my-auto text-indigo-900`} />
                                <Text style={tw`m-auto text-white ml-2 font-bold text-indigo-900`}>{item.text}</Text>
                            </View>
                        </View>
                    )
                }
            />
            
            
           
        </SafeAreaView>
    )
}

export default RidersScreen

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
