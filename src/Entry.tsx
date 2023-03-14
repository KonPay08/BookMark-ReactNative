import { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native"
import { CATEGORY_NAME } from "./CATEGORY_NAME";
import { StackNavigationProp } from '@react-navigation/stack';
import { SelectDoropDown } from "./presentation/SelectDoropDown";
import { RouterButton } from "./presentation/RouterButton";
import { RootStackParamList, useRouter } from "./useRouter";
import { Input } from "./presentation/Input";
import { SubmitButton } from "./presentation/SubmitButton";
import { Keyboard } from 'react-native';

type EntryProps = {
  navigation: StackNavigationProp<RootStackParamList, "List">
}

export const Entry: React.FC<EntryProps> = ({ navigation }) => {
  const [urlValue, setUrlValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [category, setCategory] = useState("");
  const { navigationRouter } = useRouter();
  const handleClickSubmit = () => {
    if(!urlValue || !titleValue) return;
    console.log(urlValue, titleValue, category);
    setUrlValue("");
    setTitleValue("");
    setCategory("");
  }
  const inputRef = useRef<TextInput>(null);
  const handleClickOutside = () => {
   inputRef.current?.blur();
   Keyboard.dismiss();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input 
        onChangeText={setUrlValue}
        value={urlValue}
        placeholder="url"
        ref={inputRef}
        handleClickOutside={handleClickOutside}
      />
      <Input 
        onChangeText={setTitleValue}
        value={titleValue}
        placeholder="title"
        ref={inputRef}
        handleClickOutside={handleClickOutside}
      />
      <SelectDoropDown
        data={CATEGORY_NAME}
        setData={setCategory}
      />
      <SubmitButton
        title="登録"
        onClick={handleClickSubmit}
      />
      <RouterButton 
        title="リストページ"
        navigationRouter={() => navigationRouter(navigation, "List")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    marginBottom: 12,
  },
});