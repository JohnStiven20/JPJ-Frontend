import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Card, Text } from 'react-native-paper';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.title}>
        <Card.Content>
          <Text>📦 Inventario del Almacén</Text>
          <Text>
            Bienvenido. Usa las pestañas inferiores para gestionar productos, trabajadores y asignaciones.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
});