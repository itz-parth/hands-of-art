import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import {LinearGradient} from 'expo-linear-gradient';
import { NativeWindStyleSheet } from "nativewind";
import { useEffect, useState } from 'react';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
    const[data, setData] = useState([]);
    const[type, setType] = useState('general');

    const getApi = async()=>{
        const url = 'https://newsapi.org/v2/top-headlines?' +
                    'sortBy=popularity&' +
                    `category=${type}&`+
                    'language=en&'+
                    'apiKey=1ddec9502f9e4bc880ae345088590dca';
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(()=>{
        getApi()
    },[type]);

  return (
    <SafeAreaView className="flex-1 justify-center items-center relative mt-7">
        <View className="flex justify-center h-16 absolute top-0 w-11/12 rounded-md">
            <Text className="text-3xl font-bold text-center">NEWS APP</Text>
        </View>
        <View className="absolute flex-1 flex-row justify-center w-11/12 top-0 mt-20">
            <TouchableOpacity onPress={()=>{setType('general')}} className="flex-1 w-1/2 mr-2 ">
                <LinearGradient colors={['#f75959', '#940000']} 
                className="h-20 rounded-lg">
                    <Text className="ml-4 mt-10 text-2xl text-white">General</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setType('science')}} className="flex-1 w-1/2">
                <LinearGradient colors={['#f7ea59', '#946500']} 
                className="h-20 rounded-lg">
                    <Text className="ml-4 mt-10 text-2xl text-white">Science</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View className="absolute flex-1 flex-row justify-center w-11/12 top-0 mt-44">
        <TouchableOpacity onPress={()=>{setType('sports')}} className="flex-1 w-1/2 mr-2">
                <LinearGradient colors={['#59a6f7', '#005494']} 
                className="h-20 rounded-lg">
                    <Text className="ml-4 mt-10 text-2xl text-white">Sports</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setType('business')}} className="flex-1 w-1/2">
                <LinearGradient colors={['#59f75c', '#009419']} 
                className="h-20 rounded-lg">
                    <Text className="ml-4 mt-10 text-2xl text-white">Business</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View className="mt-72 mr-24">
            <Text className="text-xl">Here are top news in <Text className="capitalize text-violet-500">{type}</Text>...</Text>
        </View>
        <ScrollView className="flex-1 w-full mt-4">
            <View className="flex justify-center items-center">
                {data.articles && data.articles.map((article, index) => (
                    <TouchableOpacity key={index} className="rounded-md mb-3 bg-gray-200 p-4 w-11/12 h-16  border-violet-500 border">
                        <Text numberOfLines={2} ellipsizeMode='tail'>{article.title}</Text>
                    </TouchableOpacity>
                ))}
                {data.articles && data.articles.length === 0 && (
                    <Text>No articles found</Text>
                )}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home