// React
// import { useState } from "react";
// React Native
import { StyleSheet, SafeAreaView } from "react-native";
// React Router Native
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
