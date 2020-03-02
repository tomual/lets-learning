import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Counter extends Component {
    state = {count:0}
    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    render() {
        const {count} = this.state
        const {color, size} = this.props

        return (
            <Text style={{color, fontSize: size}}>
                {count}
            </Text>
        )
    }
}

export default Counter;