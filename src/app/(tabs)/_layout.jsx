import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Libros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-multiple" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-books"
        options={{
          title: 'Mis libros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Mi perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
