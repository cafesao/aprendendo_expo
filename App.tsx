import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import ViewTest from './src/ViewTest'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-violet-500">
      <ViewTest />
      <StatusBar style="auto" />
    </View>
  )
}
