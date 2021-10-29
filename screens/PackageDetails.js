import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames';
import { selectDestination, setOrigin, selectOrigin, setDestination } from '../slices/navSlice';
// import { Selector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

const PackageDetails = ({navigation}) => {
    const dispatch = useDispatch();
    const [isFragile, setFragile]= useState(false)
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    const [isSubmitting, setSubmitting]= useState(false)
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU'}`
    
    useEffect(()=>{
        if(!origin || !destination) return;
        const getTravelDetails= async() => {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${'AIzaSyBub81mZ1T4-um_sIWJsrfDQiZGSUmpNVU'}`).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }; 
    getTravelDetails();
    }, [origin, destination]);
    
    // const navigation = useNavigation()
    return (
        <View>

            <Text style={tw`pb-1 mb-2 text-sm text-gray-500`}>Package Type</Text>
            <View style={tw`flex-row`}>
                <TouchableOpacity onPress={()=>setFragile(true)} style={tw `${isFragile ? 'bg-indigo-800 rounded-md mr-10 px-5 py-2 mb-2':'rounded-md mr-10 px-5 py-2 mb-2'}`}>
                    <Text style={tw `${!isFragile ? 'text-indigo-900':'text-white'}`}>Fragile/Sensitive</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFragile(false)} style={tw `${!isFragile ? 'bg-indigo-800 rounded-md mr-10 px-5 py-2 mb-2':'rounded-md mr-10 px-5 py-2 mb-2'}`}>
                    <Text style={tw `${isFragile ? 'text-indigo-900':'text-white'}`}>Non Sensitive</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                    placeholder='Package Name'
                    // value={username}
                    // onChangeText={(username) => {setUsername(username)}}
                    style={tw`mt-1 py-2 bg-white rounded-lg border-purple-400 pl-2`}
                />
            <TextInput
                    placeholder='Package Desciption'
                    multiline
                    focusable
                    textAlignVertical='top'
                    // value={username}
                    // onChangeText={(username) => {setUsername(username)}}
                    style={tw`mt-1 py-2 bg-white h-20 rounded-lg border-purple-400 pl-2`}
                />
                <TouchableOpacity onPress={()=>{setSubmitting(true); navigation.navigate('RidersScreen')}} style={tw `${!isSubmitting ? 'bg-indigo-800 rounded-md px-5 py-2 mb-2 mt-2 w-full mx-auto':' mt-5 mx-auto rounded-md px-5 py-2 mb-2'}`}>
                    <Text style={tw `${isSubmitting ? 'text-indigo-900 mx-auto':'text-white mx-auto'}`}>Pick A Rider</Text>
                </TouchableOpacity>
        </View>
    )
}

export default PackageDetails
