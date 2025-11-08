import { Drawer } from "expo-router/drawer";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        // Estilos del header
        headerStyle: { backgroundColor: "#fff" },
        headerTitleAlign: "left",
        headerTintColor: "#111",

        // Título personalizado (logo + nombre)
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                backgroundColor: "#1e66ff",
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Ionicons name="cube-outline" size={18} color="#fff" />
            </View>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Almacén JPP</Text>
          </View>
        )
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Inicio" }} />
      {/* ...tus demás pantallas */}
      <Drawer.Screen
        name="modal"
        options={{
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
