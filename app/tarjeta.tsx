import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";

type TarjetaProps = {
  titulo: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  colorFondo: string;
  colorIcono: string;
  onPress?: () => void;
};

export function Tarjeta({
  titulo,
  descripcion,
  icono,
  colorFondo,
  colorIcono,
  onPress,
}: TarjetaProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: colorFondo }]}>
        <Ionicons name={icono} size={24} color={colorIcono} />
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
    borderColor: "#eee",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
