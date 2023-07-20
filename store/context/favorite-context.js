import { Children, createContext, useState } from "react";

export const Favoritescontext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <Favoritescontext.Provider value={value}>
      {children}
    </Favoritescontext.Provider>
  );
}

export default FavoriteContextProvider;
