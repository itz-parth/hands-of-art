import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/login";

export default function App() {
  return (
    <View className="h-full bg-slate-50">
      <Login/>
    </View>
  );
}

