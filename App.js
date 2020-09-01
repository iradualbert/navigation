import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

function HomeScreen({navigation}){
  function handlePress(){
    navigation.navigate('Channel')
  }
  return (
    <View style={styles.container}>
       <Text>Home Screen</Text>
       <Button title="Order" onPress={handlePress} />
    </View>
  )
}

function ChannelScreen({navigation}) {
  return (
    <View style={styles.container}>
       <Text>Welcome To our Restaurant</Text>
    </View>
  )
}

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
       <HomeStack.Screen name="Home" component={HomeScreen} />
       <HomeStack.Screen name="Channel" component={ChannelScreen} />
    </HomeStack.Navigator>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )

}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account-circle' : 'account-circle';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
       >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
       </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
