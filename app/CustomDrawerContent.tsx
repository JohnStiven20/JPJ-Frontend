import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* 🧩 CABECERA CON AVATAR */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Extiven</Text>
        <Text style={styles.email}>extiven@empresa.com</Text>
      </View>

      {/* 📜 OPCIONES DEL MENÚ */}
      <View style={styles.menuItems}>
        <DrawerItemList {...props} />
      </View>

      {/* 🚪 PIE CON BOTÓN CERRAR SESIÓN */}
      <View style={styles.footer}>
        <DrawerItem
          label="Cerrar sesión"
          onPress={() => console.log("Logout")}
          icon={({ color, size }) => (
            <Ionicons name="exit-outline" size={size} color={color} />
          )}
        />
        <Text style={styles.version}>Versión 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#1E66FF",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    color: "#E0E7FF",
    fontSize: 13,
  },
  menuItems: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    padding: 10,
  },
  version: {
    textAlign: "center",
    color: "#888",
    fontSize: 12,
  },
});
