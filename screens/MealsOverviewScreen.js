import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  function renederMealItem(itemData) {
    const mealDataProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem {...mealDataProps}></MealItem>;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        key={(item) => item.id}
        renderItem={renederMealItem}
      ></FlatList>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
