import React, { Component } from 'react'
import { View, StyleSheet  } from 'react-native'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'
import store from './store'


class HomeScreen extends Component {

    onAddTodo = (text) => {
        store.dispatch(actionCreators.add(text))
    }

    onRemoveTodo = (index) => {
        store.dispatch(actionCreators.remove(index))
    }
    render() {
        const {todos} = this.props
        return (
            <Layout  style={styles.container} >
                <Title>To-Do List</Title>
                <Input placeholder={'Type a new task'} onSubmitEditing={this.onAddTodo} />
                <List list={todos} onPressItem={this.onRemoveTodo} />
            </Layout>
        )
    }
};

export default class App extends Component {

    state = {}

    UNSAFE_componentWillMount() {
        const { todos } = store.getState()
        this.setState({ todos })

        this.unsubscribe = store.subscribe(() => {
            const { todos } = store.getState()
            this.setState({ todos })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { todos } = this.state
        return (
            <ApplicationProvider mapping={mapping} theme={darkTheme}>
                <HomeScreen todos={todos} />
            </ApplicationProvider>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});