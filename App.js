import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text>Nama : Sansan</Text>
        <Text>Nis : 22310281</Text>
        <Text>Kelas : IX PPLG 3</Text>
        <Text>Alamat : Pelang</Text>
        <Text>Hobby : Ngaji</Text>
        <View style={styles.button}>
          <Button
            title='Press me!'
            onPress={() => alert('Dor!!!')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 5,
    borderColor: '#fff',
    padding: 50,
    borderRadius: 20,
  },
  button: {
    marginTop: 10
  }
});
