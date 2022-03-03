// React
import { useState } from "react";
// React Native
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
// React-router-native
import { useNavigate } from "react-router-native";
// Page

export default function Login() {
  // Navigation
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [auth, setAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handlePress = () => {
    if (email.length > 5 && password.length > 5) {
      //   setAuth(true);
      navigate("/home");
      setIsLoggedIn((prev) => !prev);
    } else {
      setError((prev) => !prev);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.subcontainer}>
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
        {isLoggedIn ? (
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  input: {
    width: 200,
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
});
