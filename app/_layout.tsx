import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    
    // Cambia el color de fondo de los botones del sistema Android
    NavigationBar.setBackgroundColorAsync("#E5E5E5"); // gris claro
    // Cambia el color de los iconos (blanco o oscuro)
    NavigationBar.setButtonStyleAsync("dark"); // usa "light" para fondo oscuro
  }, []);

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // 🎨 Header (barra superior)
        headerStyle: { backgroundColor: "#fff" },
        headerTitleAlign: "left",
        headerTintColor: "#111",

        // 🔵 Título personalizado (logo + texto)
        headerTitle: () => <LogoHeader />,

        // 🎨 Drawer base (panel lateral)
        drawerStyle: {
          backgroundColor: "#F9FAFB",
          width: 270,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
        },
        drawerActiveTintColor: "#1E66FF",
        drawerInactiveTintColor: "#444",
        drawerActiveBackgroundColor: "#E0E7FF",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "500",
        },
      }}
    >
      <Drawer.Screen
        name="modal"
        options={{
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="modules/inventory/index"
        options={{
          title: "Inventario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="invert-mode-sharp" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

// 💙 Subcomponente para el título del header
import { View, Text, StatusBar } from "react-native";
import CustomDrawerContent from "./CustomDrawerContent";
function LogoHeader() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <View
        style={{
          backgroundColor: "#1E66FF",
          padding: 10,
          borderRadius: 12,
        }}
      >
        <Ionicons name="cube-outline" size={18} color="#fff" />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>Almacén JPJ</Text>
    </View>
  );
}
