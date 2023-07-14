import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./DrawerNavigator";
import FavouritMealsScreen from "./FavouriteMealsScreen";
import { Ionicons } from "@expo/vector-icons";

const bottomTabs = createBottomTabNavigator();

function BottomNavigator() {
  console.log("coming in Bottom navigotor");
  return (
    <bottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        tabBarActiveTintColor: "#e4baa1",
        tabBarStyle: { backgroundColor: "#3f2f25" },
        tabBarInactiveTintColor: "white",
      }}
    >
      <bottomTabs.Screen
        name="All Categories"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <bottomTabs.Screen
        name="Favoute Meals"
        component={FavouritMealsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </bottomTabs.Navigator>
  );
}

export default BottomNavigator;
