import { Button, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../../application/styles/style';

export const SettingsView = (): JSX.Element => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    spacingTop: {
      paddingTop: StatusBar.currentHeight,
    },
  });

  return (
    <ScrollView
      style={[globalStyles.container, styles.spacingTop]}
      contentContainerStyle={globalStyles.container}
      testID="SettingsView-View"
    >
      <Text>Testando</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};
