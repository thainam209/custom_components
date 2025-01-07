import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Box =({backgroundColor ,text}) =>{
  return (
    <View style={[styles.box,{backgroundColor}]}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Box backgroundColor='green' text="hello"></Box>
      <Box backgroundColor='red' text="hi"></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width:200,
    height:200,
    backgroundColor:"white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  text: {
    color:"white"
  }
});
