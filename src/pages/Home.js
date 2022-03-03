// React native
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
// React-router
import { useNavigate } from "react-router-native";

export default function Home() {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Homepage</Text>

      <TouchableOpacity
        onPress={() => {
          navigate(-1);
        }}
      >
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
