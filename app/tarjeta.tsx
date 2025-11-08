import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";

type TarjetaProps = {
  titulo: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress?: () => void; // función que se ejecuta al tocar la tarjeta
};

export function Tarjeta({ titulo, descripcion, icono, onPress }: TarjetaProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icono} size={28} color="#333" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.description}>{descripcion}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 80,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  iconContainer: {
    marginRight: 15,
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});
