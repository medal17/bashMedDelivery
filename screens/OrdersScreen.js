// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, Text, KeyboardAvoidingView,TextInput, Image, View, Button, TouchableOpacity, Platform, TouchableHighlight, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Appbar} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';

const data=  [
    {
      id: '1',
      title: 'Samosa with Toppings',
      text: 'lorem ipsum',
      price: 100,
      status: 'Delivered',
      time:'Tomorrow 12:00'

    },
    {
      id: '2',
      title: 'Hey',
      text: 'lorem ipsum ',
      price: 200,
      status: 'Delivered',
      time:'12:00 pm'


    },
    {
      id: '3',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      price: 200,
      image:'../assets/splash.png',
      status: 'Delivered',
      time:'Tomorrow 01:00 pm'

    },
    {
      id: '4',
      title: 'Hey',
      text: 'lorem ipsum .M',
      price: 200,
      image:'../assets/splash.png',
      status: 'pending',
      time:'Tomorrow 12:00 am'

    },{
      id: '5',
      title: 'Hey',
      text: 'lorem ipsum lorem',
      price: 200,
      image:'../assets/splash.png',
      status: 'Pending',
      time:'Tomorrow 07:00'


    },{
      id: '6',
      title: 'Hey',
      text: 'lorem ipsum lorem ipsum',
      price: 200,
      image:'../assets/splash.png',
      status: 'Delivered'

    },
  ]
const OrdersScreen = ({navigation}) => {
  const [isPending, setIspending] = useState(true);
    
    return (
        <SafeAreaView style={tw`bg-gray-200 h-full`} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`flex-row justify-between px-5 mb-9`}> 
                <View style={tw`flex-row`}>
                    <Ionicon name="chevron-back" size={22} style={tw`bg-white px-2 py-2 rounded-md`} /> 
                    <Text style={tw` my-auto ml-10 text-indigo-900 font-bold text-xl`}>My Orders</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Ionicon name="search" size={22} style={tw`px-2 mr-5 py-2`} />
                    <Ionicon name="cart-outline" size={22} style={tw`bg-white px-2 py-2 rounded-md`} />
                </View>
            </View>
            <View style={tw`flex-row mb-4`}>
                <TouchableOpacity style={isPending ? tw`bg-indigo-900 py-3 px-7 mx-3 ml-5 rounded-xl`: tw`bg-white py-3 px-7 mx-3 rounded-xl `} onPress={()=>setIspending(true)}> 
                    <Text style={isPending ? tw`text-white`: tw`text-indigo-900`} >Pending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={!isPending ? tw`bg-indigo-900 py-3 px-7 mx-3 ml-5 rounded-xl`: tw`bg-white py-3 px-7 mx-3 rounded-xl`} onPress={()=>setIspending(false)}> 
                    <Text style={!isPending ? tw`text-white`: tw`text-indigo-900`}>Delivered</Text>
                </TouchableOpacity>
            </View>
            { isPending ?
                <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                contentContainerStyle={styles.container}
                
                // scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentOffset={1}
                renderItem={
                    ({item}) => (
                        <View style={tw`bg-white my-1 mx-5 rounded-2xl h-24 flex-row justify-between px-5 py-1`}>
                            <View style={tw``}>
                                <Text style={tw` my-auto ml-3 text-black font-bold text-lg`}>{item.title}</Text>
                                <Text style={tw` my-auto ml-3 text-gray-900 font-semibold text-sm`}>{item.text}</Text>
                                <Text style={tw` my-auto ml-3 text-indigo-900 text-sm`}>{'Delivery: '+ item.time}</Text>
                            </View>
                            
                            
                            <View style={tw`my-2 justify-end`}>
                                {/* <Ionicon name="location" size={25} style={tw`pl-2 my-auto text-indigo-900`} /> */}
                                <Text style={tw`m-auto text-white ml-2 font-bold text-indigo-900`}>{'Qty: '+item.price}</Text>
                                <Text style={tw`m-auto text-white ml-2 font-bold text-indigo-900`}>{item.status}</Text>
                            </View>
                        </View>
                    )
                }
            /> :
            <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                contentContainerStyle={styles.container}
                
                // scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentOffset={1}
                renderItem={
                    ({item}) => (
                        <View style={tw`bg-white my-1 mx-5 rounded-2xl h-20 flex-row justify-between px-5 py-1`}>
                            <View style={tw``}>
                                <Text style={tw` my-auto ml-3 text-black font-bold text-lg`}>{item.title}</Text>
                                <Text style={tw` my-auto ml-3 text-gray-900 font-semibold text-sm`}>{item.text}</Text>
                                {/* <Text style={tw` my-auto ml-3 text-indigo-900 text-sm`}>{'Delivery: '+ item.time}</Text> */}
                            </View>
                            
                            
                            <View style={tw`my-2 justify-end`}>
                                {/* <Ionicon name="location" size={25} style={tw`pl-2 my-auto text-indigo-900`} /> */}
                                <Text style={tw`m-auto text-white ml-2 font-bold text-indigo-900`}>{'Qty: '+item.price}</Text>
                                <Text style={tw`m-auto text-white ml-2 font-bold text-indigo-900`}>{item.status}</Text>
                            </View>
                        </View>
                    )
                }
            />
            }
            
           
        </SafeAreaView>
    )
}

export default OrdersScreen

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
