import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { Favoritescontext } from "../store/context/favorite-context";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const favoriteMealsContext = useContext(Favoritescontext);
  const mealIsFav = favoriteMealsContext.ids.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Details",
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "heart" : "heart-outline"}
            color={"red"}
            onPress={changeFavoriteMealStatushandler}
          />
        );
      },
    });
  }, [mealId, navigation, changeFavoriteMealStatushandler]);

  function changeFavoriteMealStatushandler() {
    console.log("Pressd.....................!");
    if (mealIsFav) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  }

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.mealDetailTextStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>INGREDIENTS</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>STEPS</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  mealDetailTextStyle: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
