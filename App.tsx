import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>app by leticia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8599f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#6daffa',
    color: '#ffffff',
    fontSize: 24,
    padding: 10,
  }
});
