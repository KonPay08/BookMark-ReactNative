import { TextInput, StyleSheet } from "react-native"

type InputProps = {
  onChangeText: ((text: string) => void) | undefined,
  value: string,
  placeholder: string,
  ref: React.RefObject<TextInput>
  handleClickOutside: () => void
}

export const Input: React.FC<InputProps> = ({ onChangeText, value, placeholder, ref, handleClickOutside }) => {
  return (
    <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      ref={ref}
      onBlur={handleClickOutside}
    />
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});