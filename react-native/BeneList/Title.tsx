import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
    render() {
        const { children } = this.props

        return (
            <View>
                <Text>{children}</Text>
            </View>
        )
    }
}