import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  const handlePress = () => {
    if (email.length > 5 && password.length > 5) {
      setAuth(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text>Login</Text>
      </TouchableOpacity>

      {auth ? (
        <View>
          <Text>Form submitted</Text>
        </View>
      ) : (
        <View>
          <Text>Please enter a valid login name and password</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
  },

  btn: { borderWidth: 1, backgroundColor: "lightblue" },
});
