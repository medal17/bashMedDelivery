import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames';
import { selectDestination, setOrigin, setDestination } from '../slices/navSlice';
import { Selector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

const ReciverScreen = ({navigation}) => {
    const dispatch = useDispatch();
    // const navigation = useNavigation()

    return (
        <View>
            <Text style={tw`pb-1 text-sm text-gray-500`}>Package Location</Text>
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
                            navigation.navigate('sender')
                            // navigation.navigate('s')
                            // setIsOrigin(false)
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
    )
}

export default ReciverScreen
