import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/FavoriteMeals/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryIdd;

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryId.indexOf(catId) >= 0;
  });

  return <MealsList data={displayedMeals}></MealsList>;
}

export default MealsOverviewScreen;
