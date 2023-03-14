import { View, StyleSheet, Button } from "react-native"

type RouterButtonProps = {
  title: string,
  navigationRouter: () => void,
}

export const RouterButton: React.FC<RouterButtonProps> = ({ title, navigationRouter }) => {
  return (
    <View style={styles(title)}>
      <Button 
        title={title}
        onPress={navigationRouter}
        color="white"
      />
    </View>
  )
}
function styles(title: string) {
  const Liststyle = StyleSheet.create({
    button: {
      backgroundColor: "#007AFF",
      width: 150,
      marginLeft: "auto",
      marginTop: 12,
      borderRadius: 5,
    },
  })
  const entryStyle = StyleSheet.create({
    button: {
      backgroundColor: "#007AFF",
      width: 60,
      height: 60,
      marginLeft: "auto",
      marginTop: 12,
      borderRadius: 100,
    },
  })
  switch(title) {
    case "リストページ": return Liststyle.button
    case "＋": return entryStyle.button
    default: return {}
  }
}