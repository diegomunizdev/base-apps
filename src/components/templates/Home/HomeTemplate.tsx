import { View } from 'react-native';

import { HomeHeader } from '../../organisms/Home/HomeHeader/HomeHeader';
import { globalStyles } from '../../../application/styles/style';
import { useNavigation } from '../../../application/contexts/navigation/navigation.context';

export const HomeTemplate = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container} testID="HomeTemplate-View">
      <HomeHeader navigateToSettings={() => navigation?.navigate('Settings')} />
    </View>
  );
};
