// React native
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
// React-router
import { useNavigate } from "react-router-native";

export default function Home() {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Back to Login</Text>

      <TouchableOpacity
        onPress={() => {
          navigate(-1);
        }}
      >
        <Text>Back to Homepage</Text>
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
