import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles/HomeStyles";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.title}>Tu gas, en minutos</Text>
        <Text style={styles.subtitle}>
          Rápido, seguro y confiable. ¡Haz tu pedido ahora!
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push("/pedido")}
          >
            <Text style={styles.btnText}>Hacer pedido</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.btnText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features */}
      <View style={styles.features}>
        <View style={styles.featureCard}>
          <FontAwesome5 name="gas-pump" size={32} color="#007AFF" />
          <Text style={styles.featureTitle}>Cilindros de gas</Text>
          <Text style={styles.featureText}>
            Entrega rápida y confiable directamente a tu hogar.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <FontAwesome5 name="bolt" size={32} color="#007AFF" />
          <Text style={styles.featureTitle}>Fácil de usar</Text>
          <Text style={styles.featureText}>
            Realiza tu pedido en pocos clics desde cualquier dispositivo.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <FontAwesome5 name="shield-alt" size={32} color="#007AFF" />
          <Text style={styles.featureTitle}>Seguridad garantizada</Text>
          <Text style={styles.featureText}>
            Cumplimos con todos los protocolos de seguridad y calidad.
          </Text>
        </View>
      </View>
    </View>
  );
}
