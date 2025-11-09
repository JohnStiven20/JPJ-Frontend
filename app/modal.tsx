import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Tarjeta } from "./tarjeta";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ModalScreen() {

  const router = useRouter();

  const modulos = [
    {
      id: 6,
      titulo: "Inventario",
      descripcion: "Controlar y gestionar existencias del almacén",
      icono: "cube-outline",
      colorFondo: "#E7F5FF",
      colorIcono: "#0EA5E9",
      ruta: "modules/inventory",
    },
    {
      id: 7,
      titulo: "Personal",
      descripcion: "Gestionar empleados y permisos",
      icono: "people-outline",
      colorFondo: "#FEF9E7",
      colorIcono: "#EAB308",
      ruta: "/personal",
    },
    {
      id: 1,
      titulo: "Entradas",
      descripcion: "Registrar ingreso de productos",
      icono: "arrow-down-circle-outline",
      colorFondo: "#E8F8EE",
      colorIcono: "#22C55E",
      ruta: "/entradas",
    },
    {
      id: 2,
      titulo: "Salidas",
      descripcion: "Registrar salida de consumibles",
      icono: "arrow-up-circle-outline",
      colorFondo: "#FEECEC",
      colorIcono: "#EF4444",
      ruta: "/salidas",
    },
    {
      id: 3,
      titulo: "Asignaciones",
      descripcion: "Asignar herramientas a empleados",
      icono: "person-add-outline",
      colorFondo: "#EAF2FF",
      colorIcono: "#3B82F6",
      ruta: "/asignaciones",
    },
    {
      id: 4,
      titulo: "Devoluciones",
      descripcion: "Registrar devolución de herramientas",
      icono: "refresh-outline",
      colorFondo: "#FFF4E6",
      colorIcono: "#F97316",
      ruta: "/devoluciones",
    },
    {
      id: 5,
      titulo: "Historial",
      descripcion: "Consultar movimientos realizados",
      icono: "time-outline",
      colorFondo: "#F4E8FF",
      colorIcono: "#A855F7",
      ruta: "/historial",
    },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
      >
        {modulos.map((modulo) => (
          <Tarjeta
            key={modulo.id}
            titulo={modulo.titulo}
            descripcion={modulo.descripcion}
            icono={modulo.icono as keyof typeof Ionicons.glyphMap}
            colorFondo={modulo.colorFondo}
            colorIcono={modulo.colorIcono}
            onPress={() => router.push(modulo.ruta)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 40,
    alignItems: "stretch",
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  h2: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  subtitle: {
    color: "#777",
    fontSize: 14,
    marginTop: 4,
  },
  cardsContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 40, // espacio al final para el scroll
    gap: 15,
  },
});
