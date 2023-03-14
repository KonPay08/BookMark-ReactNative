import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  "Entry": undefined,
  "List": undefined,
}

export function useRouter() {
  function navigationRouter<T extends keyof RootStackParamList>(
    navigation: StackNavigationProp<RootStackParamList, T, undefined>, 
    path: keyof RootStackParamList
  ) {
    return navigation.navigate(path);
  }
  return { navigationRouter }
}