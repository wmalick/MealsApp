import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={28} color={color} />
    </Pressable>
  );
}

export default IconButton;
