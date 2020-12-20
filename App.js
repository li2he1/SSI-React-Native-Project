import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import OnboradingScreen from "./screens/OnboardingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";

// import {AuthContext} from './AuthProvider';

// const AppStack = createStackNavigator();

import Providers from './navigation';

const App = () => {
  // return (
  //   <NavigationContainer>
  //     <AppStack.Navigator headerMode="none">
  //       <AppStack.Screen name="Onborading" component={OnboradingScreen} />
  //       <AppStack.Screen name="Login" component={LoginScreen} />
  //       <AppStack.Screen name="Signup" component={SignupScreen} />
  //     </AppStack.Navigator>
  //   </NavigationContainer>
  // );
  return <Providers />;
};

export default App;
