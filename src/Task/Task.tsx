import { Pressable, Text, View } from 'react-native'
import { useActionSheet } from '@expo/react-native-action-sheet'

export default function Task({ text }: { text: string }) {
  const { showActionSheetWithOptions } = useActionSheet()

  function onLongPress() {
    const options = ['Edit', 'Delete', 'Cancel']
    const destructiveButtonIndex = 1
    const cancelButtonIndex = 2

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        if (selectedIndex !== undefined) {
          const selected = options[selectedIndex]
          console.log(selected)
        }
      },
    )
  }

  function onPress() {
    console.log('press')
  }

  return (
    <Pressable
      className="flex grow py-7 my-4 items-center justify-center bg-toDo-task"
      onLongPress={onLongPress}
      onPress={onPress}
    >
      <Text className="">{text}</Text>
    </Pressable>
  )
}
