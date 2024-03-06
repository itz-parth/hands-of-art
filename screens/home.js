import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import {LinearGradient} from 'expo-linear-gradient';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center relative mt-7">
        <View className="flex justify-center h-16 absolute top-0 w-11/12 rounded-md">
            <Text className="text-3xl font-bold text-center">News App</Text>
        </View>
        <View className="absolute flex-1 flex-row justify-center w-11/12 top-0 mt-24">
            <TouchableOpacity className="flex-1 w-1/2 mr-2">
                <LinearGradient colors={['#f75959', '#940000']} 
                className="h-20 rounded-lg">
                    <Text></Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 w-1/2">
                <LinearGradient colors={['#f7ea59', '#946500']} 
                className="h-20 rounded-lg">
                    <Text></Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View className="absolute flex-1 flex-row justify-center w-11/12 top-0 mt-48">
        <TouchableOpacity className="flex-1 w-1/2 mr-2">
                <LinearGradient colors={['#59a6f7', '#005494']} 
                className="h-20 rounded-lg">
                    <Text></Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 w-1/2">
                <LinearGradient colors={['#59f75c', '#009419']} 
                className="h-20 rounded-lg">
                    <Text></Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default Home