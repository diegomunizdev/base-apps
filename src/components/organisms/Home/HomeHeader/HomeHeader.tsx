import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

type HomeHeaderProps = {
  navigateToSettings: () => void;
};

export const HomeHeader = ({
  navigateToSettings,
}: HomeHeaderProps): JSX.Element => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: 24 }}>Quaresma.</Text>
      <MaterialCommunityIcons
        name="cog-outline"
        size={24}
        color={colors.primary}
        onPress={navigateToSettings}
      />
    </View>
  );
};
