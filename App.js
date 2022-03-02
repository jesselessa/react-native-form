// React
import { useState } from "react";
// React Native
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
// React-router-native
import { NativeRouter, Routes, Route } from "react-router-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);

  const handlePress = () => {
    if (email.length > 5 && password.length > 5) {
      setAuth(true);
    } else {
      setError(true);
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
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      {auth ? (
        <View>
          <Text>Form submitted</Text>
        </View>
      ) : (
        error && (
          <View>
            <Text>Please enter a valid name or password</Text>
          </View>
        )
      )}
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

  btn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    backgroundColor: "lightblue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  // btnTxt: {
  // textAlign: "center",
  // justifyContent: "center",
  // alignItems: "center",
  // },
});
