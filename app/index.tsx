import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/input");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/hopeline.png")} style={{ width: 300, height: 300 }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#390050',
  },
});
