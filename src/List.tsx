import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { RouterButton } from './presentation/RouterButton';
import { RootStackParamList, useRouter } from './useRouter';

type ListProps = {
  navigation: StackNavigationProp<RootStackParamList, "List">
}

export const List: React.FC<ListProps> = ({ navigation }) => {
  const { navigationRouter } = useRouter();
  return (
    <SafeAreaView>
      <RouterButton 
        title='＋'
        navigationRouter={() => navigationRouter(navigation, "Entry")}
      />
    </SafeAreaView>
  );
}