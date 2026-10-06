import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mi perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProfileScreen;
