import React from 'react';
import { View, ScrollView, StatusBar, StyleProp, StyleSheet, TextStyle, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  createDrawerNavigator,
  createStackNavigator,
  SafeAreaView,
  createAppContainer,
} from 'react-navigation';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Drawer, Avatar, Checkbox } from 'react-native-material-ui';

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
      <View>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <MaterialIcons
        name="book"
        size={24}
      />
      <MaterialIcons
        name="book"
        size={24}
      />
      <Checkbox label="Checked by default" checked value="Value" />
      <Checkbox
          label="Custom icon"
          checked
          uncheckedIcon="star-border"
          checkedIcon="star"
          value="Value"
      />
      <Checkbox label="Disabled unchecked" disabled value="Value" />
      <Checkbox label="Disabled checked" checked disabled value="Value" />
      </View>
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