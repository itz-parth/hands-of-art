import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/login";
import Home from "./screens/home.js";

export default function App() {
  return (
    <View className="h-full bg-slate-50">
      <Home/>
    </View>
  );
}

