// In App.js in a new project

import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

class ProjectOne extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Project 1',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Project 1')}
        title="Go to notifications"
      />
    );
  }
}

class ProjectTwo extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Project 2',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
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

class ProjectThree extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Project Three',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
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
  ProjectOne: {
    screen: ProjectOne,
  },
  ProjectTwo: {
    screen: ProjectTwo,
  },
  ProjectThree: {
    screen: ProjectThree,
  },
});

// const MyApp = createAppContainer(MyDrawerNavigator);

export default createAppContainer(MyDrawerNavigator);