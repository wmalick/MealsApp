import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import DrawerNavigator from "./screens/DrawerNavigator";
import BottomNavigator from "./screens/BottomNavigator";
import FavoriteContextProvider from "./store/context/favorite-context";

const stack = createNativeStackNavigator();

export default function App() {
  const [fontsloaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsloaded) {
    return;
    // return <AppLoading></AppLoading>;
  }

  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24180f" },
            }}
          >
            <stack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
            />
          </stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
