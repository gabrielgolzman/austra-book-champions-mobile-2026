import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

const paperSettings = {
  icon: (props) => <MaterialCommunityIcons {...props} />
}

const RootLayout = () => {
  return (
    <PaperProvider settings={paperSettings}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}

export default RootLayout;
