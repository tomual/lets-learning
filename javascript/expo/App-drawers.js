import React from 'react';
import { ScrollView, StatusBar, StyleProp, StyleSheet, TextStyle, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  createDrawerNavigator,
  createStackNavigator,
  SafeAreaView,
  createAppContainer,
} from 'react-navigation';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="book"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="book"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);