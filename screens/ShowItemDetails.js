import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const ShowItemDetails = ({route, navigation}) => {
const {item } = route.params;

    return (
        <SafeAreaView>
            <Text>{item}</Text>
        </SafeAreaView>
    )
}

export default ShowItemDetails

const styles = StyleSheet.create({})
