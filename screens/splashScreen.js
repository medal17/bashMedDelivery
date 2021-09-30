import React from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';



const SplashScreen = ({navigation}) => {
// const navigation = useNavigation();
    var interval = setInterval(function(){ 
        // console.log('Hello World'); 
        navigation.navigate('login')
        }, 4000);
        
        setTimeout(function() { 
        clearInterval(interval); 
        }, 4000);
    return (
        <View style={tw`h-full`}>
            <Image
                source={require('../assets/bashMed.png')}
                style={tw`m-auto`}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
