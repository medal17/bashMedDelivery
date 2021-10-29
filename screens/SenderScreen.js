import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames';
import { selectDestination, setOrigin, selectOrigin, setDestination } from '../slices/navSlice';
import { Selector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';

// const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.location}&destinations=${destination.location}&key=${'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU'}`
const SenderScreen = ({navigation}) => {
    const dispatch = useDispatch();
    // const selector = useSelector()
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)

    

    return (
        <View>
            <Text style={tw`pb-1 text-sm text-gray-500`}>Package Destination</Text>
            <GooglePlacesAutocomplete
            style={tw` w-full absolute bg-transparent`}
                placeholder='Recieiving Location'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                    }));
                    // console.log(destination ? destination.location :'pp')
                    navigation.navigate('package')
                }}
                fetchDetails={true}
                query={{
                    key: 'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU',
                    language: 'en',
                }}
                // styles={{container:{zIndex:100,}}}
            />
            
            <View style={tw` w-full justify-end h-1/2 bg-transparent`} >
                <TouchableOpacity onPress={()=>navigation.navigate('reciever')} style={tw` w-11 rounded-full border-2  justify-center content-end h-11 text-white mx-auto `}>
                    {/* <Text style={tw`text-white `}>Back</Text> */}
                    <View style={tw` w-9 rounded-full bg-black justify-center content-end h-9 text-white mx-auto `}>
                        <Ionicon name='chevron-back' size={20} color='white'  style={tw`m-auto`}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SenderScreen
