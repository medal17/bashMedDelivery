import React from 'react'
import { useDispatch } from 'react-redux';
import { firebase } from './config';
import { AsyncStorageStatic } from 'react-native';
import {setUser} from '../slices/navSlice'


 _storeData = async (data) => {
                    try {
                        await AsyncStorageStatic.setItem(
                        data
                        );
                    } catch (error) {
                        // Error saving data
                    }
                    };


export const onRegisterPress = (username, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    export const Login = (username, password, navigation, setLoading, dispatch) => {
        // const dispatch = useDispatch();

        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((response) => { 
                const userDetails = {
                    'name':response.user.displayName,
                    'phone': response.user.phoneNumber,
                    'photo': response.user.photoURL,
                    'token': response.accessToken,
                    'email' : response.user.email
                }
                dispatch(setUser({user:userDetails}));
                _storeData('details', userDetails);
                console.log(response.user.email); 
                navigation.navigate('homeScreen');
                setLoading(false);

            })
            .catch((error) => {
                alert(error)
        });
    }

    export const Logout = (navigation, dispatch) => {
        // const dispatch = useDispatch();

        firebase
            .auth()
            .signOut()
            .then((response) => { 
                dispatch(setUser(null));

                console.log(response); 
                navigation.navigate('login');
                // setLoading(false);
            })
            .catch((error) => {
                alert(error)
        });
    }