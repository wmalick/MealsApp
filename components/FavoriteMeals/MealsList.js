import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ data }) {
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
    <View style={styles.container}>
      <FlatList
        data={data}
        key={(item) => item.id}
        renderItem={renederMealItem}
      ></FlatList>
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
