import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShowItemDetails = ({route, navigation}) => {
const {item } = route.params;

    return (
        <View>
            <Text>{item}</Text>
        </View>
    )
}

export default ShowItemDetails

const styles = StyleSheet.create({})
