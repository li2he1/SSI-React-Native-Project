import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboradingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const AppStack = createStackNavigator();

const AuthStack = () => {
  return (
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onborading" component={OnboradingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Signup" component={SignupScreen} />
    </AppStack.Navigator>
    );
};

export default AuthStack;