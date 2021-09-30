import React from 'react'
import { StyleSheet, Platform, Text, StatusBar, View, SafeAreaView, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const data=  [
      {
        id: '1',
        text: 'lorem ipsum',
        price: 100,
      },
      {
        id: '2',
        text: 'lorem ipsum dorem lorem ipsum lorem ipsum',
        price: 200,
      },
      {
        id: '3',
        text: 'lorem ipsum lorem ipsum',
        price: 200,
        image:'../assets/splash.png'
      },
    ]

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={[tw`mx-5`, styles.AndroidSafeArea]}>
            <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            contentContainerStyle={styles.container}
            numColumns={2}
            contentOffset={3}
            renderItem={
                ({item}) => (
                    <TouchableWithoutFeedback  onPress ={() => navigation.navigate('showItemDetails',{item: 'anything you want here'})}>
                        <View style={tw`w-1/2 bg-red-100 my-2 rounded-lg`}>
                            <Text style={styles.title}>{item.text}</Text>
                            <Image
                                style={tw`h-24 w-24`}
                                source={require('../assets/bashMed.png')}
                            />
                            <Text style={tw`text-base text-center`}>N {item.price} </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
            />
        </SafeAreaView>
    )
}

export default HomeScreen

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
  container:{
    // marginRight:'2px',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});