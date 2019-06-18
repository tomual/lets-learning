import React, { Component } from 'react';
import { Drawer, Avatar, Checkbox } from 'react-native-material-ui';
import { View, Text } from "react-native";
class App extends Component {
  dochangey = function() {
    return null;
  }
  render() {
    return (
      <View>
          <Checkbox label="I Agree" value="agree" checked={true} onCheck={this.dochangey} />
          <Text>WHy is this such a piece of shit</Text>
      </View>
    );
  }
}

export default App;

// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
