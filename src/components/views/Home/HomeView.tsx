import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import { HomeProvider } from '../../providers/Home/Home.provider';
import { HomeTemplate } from '../../templates/Home/HomeTemplate';
import { globalStyles } from '../../../application/styles/style';

export const HomeView = (): JSX.Element => {
  const styles = StyleSheet.create({
    spacingTop: {
      paddingTop: StatusBar.currentHeight,
    },
  });

  return (
    <ScrollView
      style={[globalStyles.container, styles.spacingTop]}
      contentContainerStyle={globalStyles.container}
      testID="HomeView-View"
    >
      <HomeProvider>
        <HomeTemplate />
      </HomeProvider>
    </ScrollView>
  );
};
