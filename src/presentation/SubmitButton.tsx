import { View, StyleSheet, Button } from "react-native"

type ButtonProps = {
  title: string,
  onClick: () => void
}

export const SubmitButton: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onClick}
        color="white"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    marginLeft: "auto",
    backgroundColor: "#007AFF",
    width: 60,
    borderRadius: 5,
  },
});