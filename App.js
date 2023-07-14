import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

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
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" },
          }}
          initialRouteName="MealCategories"
        >
          <stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Catrgories",
            }}
          />
          <stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catTitle = route.params.categoryId;
            //   return {
            //     title: catTitle,
            //   };
            // }}
          />
          <stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
