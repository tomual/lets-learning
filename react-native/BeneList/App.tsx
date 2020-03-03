import React, { Component } from 'react'
import { View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {
    state = {
        todos: ['Dark Souls', 'Dark Souls II', 'Dark Souls III']
    }

    onAddTodo = (text) => {
        const { todos } = this.state

        this.setState({
            todos: [text, ...todos]
        })
    }

    onRemoveTodo = (index) => {
        const { todos } = this.state

        this.setState({
            todos: todos.filter((todo, i) => i !== index)
        })
    }

    render() {
        const { todos } = this.state
        return (
            <View>
            <Title>To-Do List</Title>
            <Input placeholder={'Type a new task'} onSubmitEditing={this.onAddTodo} />
            <List list={todos} onPressItem={this.onRemoveTodo} />
            </View>
        )
    }
}