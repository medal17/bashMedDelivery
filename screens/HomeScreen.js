import React, {useState} from 'react'
import { StyleSheet, Platform, Text, StatusBar, AsyncStorageStatic, ToastAndroid, View, SafeAreaView, FlatList, TouchableWithoutFeedback, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
// import {Icon} from 'react-native-element';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import tw from 'tailwind-react-native-classnames';
import {selectUser} from '../slices/navSlice'
import { useSelector } from 'react-redux';
import { Logout } from '../firebase/actions';
import { useDispatch } from 'react-redux';

const _retrieveData = async () => {
  try {
    const value = await AsyncStorageStatic.getItem('details');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

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
    const [minimized, setMinimized] =useState(false);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    // console.log(user.user.email)
    return (
        <SafeAreaView style={[tw`mr-6 ml-4 `, styles.AndroidSafeArea]}>
          <View style={[tw`h-full `]}>
            <View style={tw`h-1/4 mt-14 w-2/5`}>
                <View style={ tw`text-indigo-900 w-20 h-20 rounded-full mx-auto  bg-gray-200`}>
                  <Icon size={32} name='user-alt'  style={ [tw`text-indigo-900 justify-center m-auto`]} />
                </View>
                <View style={ tw`text-indigo-900  mt-2`}>
                  <Text style={ [tw`text-indigo-900 justify-center mx-auto`]}>{ user ? user.user.email:'Please Login'}</Text>
                </View>
            </View>

            <View style={tw`h-2/5 justify-evenly`}>
              <View style={tw`flex-row `}>
                <Ionicon  size={22} name='cart-outline'  style={ [tw`text-indigo-900`, styles.menuIcon]}  />
                <Text style={tw`ml-2 text-indigo-900 font-semibold`}>Vendors/Stores</Text>
              </View>
              <TouchableOpacity style={tw`flex-row `} onPress={()=>navigation.navigate('RidersScreen')}>
                <Ionicon  size={23} name='bicycle'  style={ [tw`text-indigo-900`, styles.menuIcon]}  />
                <Text style={tw`ml-2 text-indigo-900 font-semibold`}>Dispatchers</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`flex-row ml-1`} onPress={()=>navigation.navigate('OrdersScreen')}>
                <Icon name='shopping-basket' size={19} style={ [tw`text-indigo-900`, styles.menuIcon]} />
                <Text style={tw`ml-2 text-indigo-900 font-semibold`}>My Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`flex-row `} onPress={()=>navigation.navigate('ProfileScreen')}>
                <Icon name='user' size={20} style={ [tw`text-indigo-900 ml-1`, styles.menuIcon]} />  
                <Text style={tw`ml-2 text-indigo-900 font-semibold`}>My Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`flex-row ml-1`} 
                  onPress={()=>Alert.alert('Confirm Log Out', 
                  'Are you sure you wish to log out', 
                  [{text:'Yes', onPress:()=>{ToastAndroid.show("Logged Out", ToastAndroid.SHORT); Logout(navigation, dispatch) }}, 
                  {text:'No', onPress:()=>{ToastAndroid.show("Cancelled", ToastAndroid.SHORT);}}])}>
                <Ionicon  size={22} name='log-out-outline'  style={ [tw`text-indigo-900`, styles.menuIcon]}  />
                <Text style={tw`ml-2 text-indigo-900 font-semibold`}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[tw `${minimized?'ml-40 my-20 shadow-lg bg-gray-100 absolute rounded-3xl pl-5 h-5/6':'w-full mr-6 ml-4 bg-gray-100 drop-shadow-md ml-0 z-50  absolute'}`, styles.AndroidSafeArea]}>
            <View style={tw`flex-row justify-between my-5`}>
              <TouchableOpacity onPress={()=>setMinimized(!minimized)}>
                <View style={tw`bg-white p-2 rounded-md`}>
                  <FeatherIcon size={25} name='bar-chart-2' style={styles.menuIcon} />
                </View>
              </TouchableOpacity>
              <FeatherIcon size={25} name='shopping-cart' />
            </View>
            <Text style={tw`text-xl ml-2 font-bold`}>
               What do you want us  
            </Text>
            <Text style={tw`text-base ml-2 mb-4`}>
              to help you deliver?
            </Text>
            <View style={tw`w-full h-10 bg-white rounded-lg justify-between pl-4 flex-row ml-2 mt-1`}> 
              <TextInput placeholder='Search by Item' />
              <Icon size={20} color="black" name="search" style={tw`flex justify-center mr-3 my-auto`}/>
            </View>

            <View style={tw`flex-row justify-between mt-4 ml-2 pb-4`}>
              <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                <View style={tw`${minimized? 'bg-purple-900 py-1.5 px-5 rounded-lg mr-4':'bg-purple-900 py-1.5 px-5 rounded-lg'} `}>
                  <Text style={tw`text-white font-semibold text-sm`}>
                    Eatery
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('dispatchScreen')}>
                <View style={tw`bg-purple-900 py-1.5 px-5 rounded-lg `}>
                  <Text style={tw`text-white font-semibold text-sm`}>
                    Dispatch For Me
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('storeScreen')}>
                <View style={tw`bg-purple-900 py-1.5 px-5 rounded-lg `}>
                  <Text style={tw`text-white font-semibold text-sm`}>
                    Stores
                  </Text>
                </View>
              </TouchableOpacity>
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
                    <TouchableWithoutFeedback  onPress ={() => navigation.navigate('showItemDetails',{item: item.text})}>
                        <View style={tw`w-1/2 mx-1 my-2 flex-row  rounded-lg h-52`}>
                          <View style={tw`w-11/12 bg-gray-200 mx-1 my-2 rounded-2xl h-full mb-3 p-2 flex justify-around `}>
                            <Image
                                style={tw`h-24 w-24 flex justify-center rounded-full mx-auto`}
                                source={require('../assets/bashMed.png')}
                            />
                            <Text style={[tw`mx-auto text-center`,styles.title]}>{item.text}</Text>
                            <View style={tw`flex-row mx-1 justify-around`}>
                              <Text style={tw`text-base text-center `}>N {item.price} </Text>
                              {/* <Button title='Add to Cart' style={tw`w-1/2`} /> */}
                              <TouchableOpacity >
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
          </View>
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