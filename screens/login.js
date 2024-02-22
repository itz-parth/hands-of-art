import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground} from "react-native"

const Login = () => {
  return (
        <View className="flex-1 justify-center items-center relative">
            <Image 
                source={require('../assets/images/artwork.png')}
                className="h-96 absolute top-0"/>
            <TextInput
                className="bg-white w-10/12 rounded-xl p-2 border-b caret-none mt-64 "
                placeholder="Username"/>
            <TextInput
                className="bg-white w-10/12 p-2 mt-2 rounded-xl border-b"
                placeholder="Password"/>
            <TouchableOpacity className="w-5/12 bg-green-400 rounded-3xl mt-12 end-1 self-end mr-8">
                <Text className="text-center text-lg p-2">Login</Text>
            </TouchableOpacity>
            <View className="absolute bottom-0 mb-6 text-base flex-row">
                <Text>Dont have an account?</Text>
                <TouchableOpacity>
                    <Text className="text-green-700"> Register</Text>
                </TouchableOpacity>
                
            </View>
        </View>
  )
}

export default Login