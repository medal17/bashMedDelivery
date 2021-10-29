// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, Text, KeyboardAvoidingView,TextInput, Image, View, Button, TouchableOpacity, Platform, TouchableHighlight, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Appbar} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';
import { Rating, AirbnbRating } from 'react-native-elements';

const data=  [
    {
      id: '1',
      title: 'Hey',
      text: 'lorem ipsum',
      time:'3hrs',
      price: 100,
    },
    {
      id: '2',
      title: 'Hey',
      text: 'lorem ipsum ',
      time:'3hrs',
      price: 200,
    },
    {
      id: '3',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      time:'3hrs',
      price: 200,
      image:'../assets/splash.png'
    },
    {
      id: '4',
      title: 'Hey',
      text: 'lorem ipsum .M',
      time:'3hrs',
      price: 200,
      image:'../assets/splash.png'
    },{
      id: '5',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      price: 200,
      time:'3hrs',
      image:'../assets/splash.png'
    },{
      id: '6',
      title: 'Hey',
      text: 'lorem ipsum ',
      price: 200,
      time:'3hrs',
      image:'../assets/splash.png'
    },
  ]
const RidersScreen = ({navigation}) => {
    const [expanded, setExpanded] = useState(false)
    const [itemId, setItem] = useState()
    return (
        <SafeAreaView style={tw`bg-gray-200 h-full`} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`flex-row justify-between px-5 mb-9`}> 
                <View style={tw`flex-row`}>
                    <Ionicon name="chevron-back" size={20} style={tw`bg-white px-2 py-2 rounded-md`} /> 
                    <Text style={tw` my-auto ml-10 text-indigo-900 font-bold text-base`}>Dispatchers</Text>
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
                        <TouchableOpacity onPress={()=>{setItem(item.id); setExpanded(!expanded)}} style={tw `${expanded && itemId==item.id ? `bg-white my-1 mx-5 rounded-2xl h-44 flex-row justify-between px-5`: `bg-white my-1 mx-5 rounded-2xl h-20 flex-row justify-between px-5`}`}>
                            <View style={tw`flex-row `}>
                                <Image
                                    source={require('../assets/bashMed.png')}
                                    style={tw` my-auto h-10 w-10 rounded-full`}
                                />
                                <Text style={tw` my-auto ml-3 text-indigo-900 font-bold text-sm`}>{item.title}</Text>
                            </View>
                            
                            <View style={tw`my-auto`}> 
                                <View style={tw`flex-row`}>
                                    <Ionicon name="location" size={20} style={tw`pl-2 my-auto text-indigo-900`} />
                                    <Text style={tw`m-auto text-white ml-2 text-xs text-indigo-900`}>{item.text}</Text>
                                </View>
                                <View style={tw`flex-row mt-1`}>
                                    <Ionicon name="time" size={20} style={tw`pl-2 my-auto text-indigo-900`} />
                                    <Text style={tw` text-white my-auto ml-2 text-xs justify-center text-indigo-900`}>{item.time}</Text>
                                </View>
                            </View>
                            <View>
                                {/* <Rating imageSize={10} readonly startingValue={5}  />; */}
                            </View>
                        </TouchableOpacity>
                    )
                }
            />
            {/* const { rating } = this.props; */}


            
           
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
