import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";
import Project from "../screens/Project";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: "pop",
          gestureEnabled: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
