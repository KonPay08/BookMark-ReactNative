import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

type SelectDoropDownProps = {
  data: string[],
  setData: (value: React.SetStateAction<string>) => void,
}

export const SelectDoropDown: React.FC<SelectDoropDownProps> = ({ data, setData }) => {
  return (
    <SelectDropdown
      data={data}
      defaultValue="選択してください"
      onSelect={selectedItem => {
        setData(selectedItem)
      }}
      dropdownIconPosition="right"
      renderDropdownIcon={renderDropdownIcon}
      buttonStyle={styles.select}
      dropdownStyle={styles.dropdown}
    />
  )
}
function renderDropdownIcon() {
  return (
    <Ionicons
      name="chevron-down"
      size={24}
      color="gray"
      style={{ marginRight: 10 }}
    />
  );
};
const styles = StyleSheet.create({
  select: {
    width: 210,
    borderRadius: 5,
    borderWidth: 1,
  },
  dropdown: {
    borderRadius: 5,
  }
})
