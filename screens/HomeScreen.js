import React from 'react'
import { StyleSheet, Platform, Text, StatusBar, View, SafeAreaView, FlatList, TouchableWithoutFeedback, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import {Icon} from 'react-native-element';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
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
        text: 'lorem ipsum dorem lorem ipsum lorem ipsum',
        price: 200,
      },
      {
        id: '3',
        title: 'Hey',
        text: 'lorem ipsum lorem ipsum',
        price: 200,
        image:'../assets/splash.png'
      },
      {
        id: '4',
        title: 'Hey',
        text: 'lorem ipsum lorem ipsum',
        price: 200,
        image:'../assets/splash.png'
      },{
        id: '5',
        title: 'Hey',
        text: 'lorem ipsum lorem ipsum',
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

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={[tw`mr-6 ml-4 bg-gray-100`, styles.AndroidSafeArea]}>
            <View style={tw`flex-row justify-between my-5`}>
              <View style={tw`bg-white p-2 rounded-md`}>
                <FeatherIcon size={25} name='bar-chart-2' style={styles.menuIcon} />
              </View>
              <FeatherIcon size={25} name='shopping-cart' />
            </View>
            <Text style={tw`text-xl font-bold`}>
               What do you want us  
            </Text>
            <Text style={tw`text-base`}>
              to help you deliver?
            </Text>
            <View style={tw`w-full h-12 bg-white rounded-lg justify-between pl-4 flex-row`}> 
              <TextInput placeholder='Search by Item' />
              <Icon size={20} color="black" name="search" style={tw`flex justify-center mr-3 my-auto`}/>
            </View>
            <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentOffset={1}
            renderItem={
                ({item}) => (
                    <TouchableWithoutFeedback  onPress ={() => navigation.navigate('showItemDetails',{item: 'anything you want here'})}>
                        <View style={tw`w-1/2 mx-1 my-2 flex-row  rounded-lg h-52`}>
                          <View style={tw`w-11/12 bg-gray-200 mx-1 my-2 rounded-lg h-full mb-3 p-2 flex justify-around `}>
                            <Image
                                style={tw`h-24 w-24 flex justify-center rounded-full mx-auto`}
                                source={require('../assets/bashMed.png')}
                            />
                            <Text style={[tw`mx-auto text-center`,styles.title]}>{item.text}</Text>
                            <View style={tw`flex-row mx-1 justify-around`}>
                              <Text style={tw`text-base text-center `}>N {item.price} </Text>
                              {/* <Button title='Add to Cart' style={tw`w-1/2`} /> */}
                              <TouchableOpacity>
                                <View style={tw`bg-purple-900 py-1 px-5 rounded-md `}>
                                  <Text style={tw`text-white font-semibold text-sm`}>
                                    Buy
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
            />
        </SafeAreaView>
    )
}

export default HomeScreen

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
  container:{
    // marginRight:'2px',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  menuIcon:{
    transform: [{rotateX: '25deg'}]
  }
});