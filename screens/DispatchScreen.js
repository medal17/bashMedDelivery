import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker} from 'react-native-maps';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import {setOrigin, selectOrigin, setDestination, selectDestination, selectUser} from '../slices/navSlice'
import LoginScreen from './LoginScreen';
import ReciverScreen from './ReciverScreen';
import SenderScreen from './SenderScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PackageDetails from './PackageDetails';
// import tw from 'tailwind-react-native-classnames';


const DispatchScreen = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    const [isOrigin, setIsOrigin] = useState(true);
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const user = useSelector(selectUser)
    const mapRef = useRef(null);
    // const navigation = useN
    useEffect(() => {
        if(!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top:80, right:50, left:50, bottom:50}
        })
    }, [origin, destination])
    
    return (
        // console.log(origin);
        <SafeAreaView style={tw`h-full`}>
            {/* <Image
                source={require('../assets/bashMed.png')}
                style={tw`m-auto`}
            /> */}
          
            {/* AIzaSyAx2AARYJ8_Hy6mxAeSjDKYa4jiUWPC7qQr */}
            
            <View style={tw`h-1/2`}>
            <MapView
                // mapType='mutedStandard'
                ref={mapRef}
                initialRegion={{
                latitude: origin ? origin.location.lat: 9.081999,
                longitude: origin ? origin.location.lng :  8.675277,
                latitudeDelta: 10.05,
                longitudeDelta: 10.05,
                }}
                region={{
                    latitude: origin ? origin.location.lat: 9.081999,
                    longitude: origin ? origin.location.lng :  8.675277,
                    latitudeDelta: origin || destination ? 3.05 : (origin && destination ? 10.05:10.05),
                    longitudeDelta: origin || destination ? 3.05 : (origin && destination ? 10.05:10.05),
                }}
                style={tw`h-full w-full`}
            >
            { origin && destination &&
                (<MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey='AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU'
                    strokeColor="red"
                    strokeWidth={3}
                />)
                }
           { origin?.location && (<Marker
                coordinate={{ 
                    latitude : origin.location.lat , 
                    longitude : origin.location.lng 
                }}
                identifier='destination'
                />)}
                { destination?.location && (<Marker
                coordinate={{ 
                    latitude : destination.location.lat , 
                    longitude : destination.location.lng 
                }}
                identifier='destination'     
                />)}
            </MapView>
            </View>
            <View style={tw` w-full flex-row  p-3`}>
                <Ionicon name='home' size={20} />
                <Text style={tw`mx-auto font-bold`}>Hey, { user?user.user.email:'===' + origin?origin.location.lat:'00'}</Text>
                {/* <Text>Where is Package Location?</Text> */}
            </View>
            <View style={tw`h-1/2 px-7 rounded-full`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='reciever'
                        component={ReciverScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='sender'
                        component={SenderScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='package'
                        component={PackageDetails}
                        options={{
                            headerShown: false,
                        }}
                    />
                    
                </Stack.Navigator>
                {/* <ReciverScreen/> */}
            </View>
            {/* <View style={tw` h-1/2 z-50 w-full px-5 bg-transparent flex`}>
                
                
                    
                <View style={tw`h-1/4`}>
                    <GooglePlacesAutocomplete
                    style={tw` w-full absolute bg-transparent`}
                        placeholder='Sender Location'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details.geometry.location);
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null));
                            setIsOrigin(false)
                        }}
                        fetchDetails={true}
                        returnKey='search'
                        query={{
                            key: 'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU',
                            language: 'en',
                        }}
                        // styles={{
                        // }}

                        />
                    </View>
                    <View style={tw`h-1/2`}>
                        <GooglePlacesAutocomplete
                            placeholder='Recieiving Location'
                            onPress={(data, details = null) => {
                                // 'details' is provided when fetchDetails = true
                                dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                                }));
                                console.log(destination ? destination.location :'pp')
                            }}
                            fetchDetails={true}
                            query={{
                                key: 'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU',
                                language: 'en',
                            }}
                            // styles={{container:{zIndex:100,}}}
                        />
                    </View>
            </View> */}
            {/* <Text>{origin}</Text> */}
        </SafeAreaView>
        
    )
}

export default DispatchScreen

const styles = StyleSheet.create({})
