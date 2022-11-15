import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-violet-500">
      <Text className="text-center text-white text-xl">Hello Word!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
