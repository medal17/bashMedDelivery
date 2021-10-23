import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker} from 'react-native-maps';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import tw from 'tailwind-react-native-classnames';


const DispatchScreen = ({navigation}) => {
// const navigation = useNavigation();
    // var interval = setInterval(function(){ 
        // console.log('Hello World'); 
        // navigation.navigate('login')
        // }, 4000);
        
        // setTimeout(function() { 
        // clearInterval(interval); 
        // }, 4000);
        const ref = useRef();

        useEffect(() => {
            ref.current?.setAddressText('');
            
        }, []);
        [useData, setData]=useState('');
    return (
        
        <SafeAreaView style={tw`h-full`}>
            {/* <Image
                source={require('../assets/bashMed.png')}
                style={tw`m-auto`}
            /> */}
          
            
            <View style={tw`h-33 absolute z-50 w-full px-5`}>
                <View >
                    <Ionicon name='chevron-back' size={20} />
                    <Text>Map Screen</Text>
                </View>
                <GooglePlacesAutocomplete
                placeholder='Enter Your Location'
                ref={ref}
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'}
                renderDescription={row => row.description}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    setData(details)
                }}
                // currentLocation={true}
                // currentLocationLabel='Current location'
                query={{
                    key: 'AIzaSyBWguSH-uQILMtBnQ2OUGdZN_sTd7SiIv4',
                    language: 'en',
                }}
                style={{
                listView: {
                    position: 'absolute',
                    top: 60,
                    left: 10,
                    right: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flex: 1,
                    elevation: 3,
                    zIndex: 100,
                },
                textInputContainer: {
                    backgroundColor: 'transparent',
                    margin: 0,
                    width: '100%',
                    padding: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    backgroundColor: '#F9F5F4',
                    borderRadius: 50,
                    width: "100%",
                    height: 150,
                    padding: 20,
                },
                description: {
                    // color: '#ac879a',
                    fontWeight: '300'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                }
            }}
                />
                <GooglePlacesAutocomplete
                placeholder='Enter Destination Location'
                ref={ref}
                minLength={2}
                autoFocus={false}
                returnKeyType={'default'}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    setData(details)
                }}
                // currentLocation={true}
                // currentLocationLabel='Current location'
                query={{
                    key: 'AIzaSyBWguSH-uQILMtBnQ2OUGdZN_sTd7SiIv4',
                    language: 'en',
                }}
                style={{
                    textInputContainer: {
                    backgroundColor: 'grey',
                    },
                    textInput: {
                    height: 38,
                    color: '#5d5d5d',
                    fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                    color: '#1faadb',
                    },
                }}
                />
                <Text>{useData}</Text>
            </View>
            
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={tw`h-full w-full`}
            >
           {/* <Marker
            coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
            image={{uri: 'custom_pin'}}
            /> */}
            </MapView>
        </SafeAreaView>
    )
}

export default DispatchScreen

const styles = StyleSheet.create({})
