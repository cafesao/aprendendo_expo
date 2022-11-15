import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import Task from './src/Task/Task'
import TaskTest from './test/TaskTest'

export default function App() {
  return (
    <ActionSheetProvider>
      <View className="flex-1 flex-row items-center justify-center bg-toDo-background">
        <ScrollView className="mt-10">
          {TaskTest.map((value, index) => (
            <Task text={value} key={index} />
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </ActionSheetProvider>
  )
}
