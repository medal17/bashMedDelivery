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
          
            
            <View style={tw`h-32 z-50 w-full px-5`}>
                <View >
                    <Ionicon name='chevron-back' size={20} />
                    <Text>Map Screen</Text>
                </View>
                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder='Enter Your Location'
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
                    container:{
                        flex:0,
                    },
                    textInput: {
                        fontSize:18,
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
                // currentLocation={true}
                // currentLocationLabel='Current location'
                query={{
                    key: 'AIzaSyAx2AARYJ8_Hy6mXAeSjDKYa4jiUWPC7qQ',
                    language: 'en',
                }}
                style={{
                    container:{
                        flex: 0,
                        marginTop:2,
                    },
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
