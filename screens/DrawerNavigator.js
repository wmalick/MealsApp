import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./CategoriesScreen";
import FavouritMealsScreen from "./FavouriteMealsScreen";
import { Ionicons } from "@expo/vector-icons";

const drawer = createDrawerNavigator();

function DrawerNavigator() {
  console.log("coming in drawer navigotor");
  return (
    <drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <drawer.Screen
        name="Categoriess"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <drawer.Screen
        name="FavouritMealsScreen"
        component={FavouritMealsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </drawer.Navigator>
  );
}

export default DrawerNavigator;
