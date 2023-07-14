import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((item) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={item}>
        {item}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
  },
});
