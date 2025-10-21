import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorScheme === "dark" ? "#BB86FC" : "#6200EE",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#999" : "#777",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#121212" : "#fff",
          borderTopWidth: 0.3,
          borderTopColor: colorScheme === "dark" ? "#333" : "#ccc",
          height: 60,
          paddingBottom: 6,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workers"
        options={{
          title: "Trabajadores",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-hard-hat"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="assignments"
        options={{
          title: "Asignaciones",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
