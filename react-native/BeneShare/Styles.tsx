import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 50,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 20
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  btn: {
    backgroundColor: 'rgb(70, 127, 207)',
    padding: 20,
    borderRadius: 3,
  },
  btnText: {
    color: '#fff',
  },
});

export default styles;
