import { StyleSheet, Text, View } from "react-native";
import { Tarjeta } from "./tarjeta";
import { Ionicons } from "@expo/vector-icons";

export default function ModalScreen() {
  const modulos = [
    {
      id: 1,
      titulo: "Entradas",
      descripcion: "Registrar ingreso de productos",
      icono: "arrow-down-circle-outline",
    },
    {
      id: 2,
      titulo: "Salidas",
      descripcion: "Registrar salida de consumibles",
      icono: "arrow-up-circle-outline",
    },
    {
      id: 3,
      titulo: "Asignaciones",
      descripcion: "Asignar herramientas a empleados",
      icono: "person-add-outline",
    },
    {
      id: 4,
      titulo: "Devoluciones",
      descripcion: "Registrar devolución de herramientas",
      icono: "refresh-outline",
    },
    {
      id: 5,
      titulo: "Historial",
      descripcion: "Consultar movimientos realizados",
      icono: "time-outline",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.h2}>Bienvenido al Sistema de Inventario</Text>
        <Text style={styles.subtitle}>Selecciona un módulo para comenzar</Text>
      </View>

      {/* Contenedor de tarjetas */}
      <View style={styles.cardsContainer}>
        {modulos.map((modulo) => (
          <Tarjeta
            key={modulo.id}
            titulo={modulo.titulo}
            descripcion={modulo.descripcion}
            icono={modulo.icono as keyof typeof Ionicons.glyphMap}
            onPress={() => {
              console.log("Hola");
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-start",
    paddingTop: 60,
    alignItems: "stretch",
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
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
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch", // hace que las tarjetas usen todo el ancho disponible
    gap: 15,
    paddingHorizontal: 10, // pequeño margen lateral
    width: "100%", // asegura que ocupe el ancho completo del contenedor padre
  },
});
