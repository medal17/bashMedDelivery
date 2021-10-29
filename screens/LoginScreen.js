// import { CurrentRenderContext } from '@react-navigation/core'
// import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Image, View, Button, TouchableOpacity, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { Login } from '../firebase/actions';
import { selectUser } from '../slices/navSlice';

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const LoginUser=()=>{
        if(username.length>12 && password.length >6){
            Login(username, password, navigation, setLoading, dispatch); 
            setLoading(true);
            console.log('loading')
        }
        // setLoading(true);
        console.log('not loading')
    }
    const user = useSelector(selectUser)
    console.log(user.email)
    return (
        <KeyboardAvoidingView style={tw`py-20 `} behavior={Platform.OS=='ios'?'padding':'height'}>
            <View style={tw`bg-purple-100 my-auto mx-5  rounded-xl h-full`}>
                <Image
                    source={require('../assets/bashMed.png')}
                    style={tw`mx-auto mt-10`}
                />
            
                <TextInput
                    placeholder='Username'
                    value={username}
                    onChangeText={(username) => {setUsername(username)}}
                    style={tw`mt-10 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                />
                 <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => {setPassword(password)}}
                    style={tw`mt-3 py-2 bg-gray-100 mx-5 border-b-2 border-purple-400 pl-2`}
                    editable={username.length < 12 ? false : true}
                    selectTextOnFocus={username.length < 12 ? false : true}
                />
                <TouchableOpacity onPress={()=> LoginUser()} style={tw`${username.length>12 && password.length >6 ? 'mx-5 my-5 bg-purple-900 rounded-full py-3 z-50':'mx-5 my-5 bg-purple-200 rounded-full py-3'}`}>
                   <Text style={tw`m-auto text-white text-sm`}>{ isLoading ? 'Loading' : 'Login'}</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                   <Text style={tw`m-auto text-white text-base text-purple-900`}>Sign up instead</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
