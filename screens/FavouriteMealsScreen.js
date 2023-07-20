import { useContext } from "react";
import { Text } from "react-native";
import { Favoritescontext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/FavoriteMeals/MealsList";

function FavouritMealsScreen() {
  const favoriteMealsContext = useContext(Favoritescontext);

  const favMeals = MEALS.filter((item) =>
    favoriteMealsContext.ids.includes(item.id)
  );

  return <MealsList data={favMeals} />;
}

export default FavouritMealsScreen;
