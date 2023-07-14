import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridTile}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => [
          styles.pressableStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridTile: {
    flex: 1,
    height: 150,
    margin: 16,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  pressableStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
