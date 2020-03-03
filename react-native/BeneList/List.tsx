import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { CheckBox } from '@ui-kitten/components';
import { List as KittyList, ListItem as KittyListItem} from '@ui-kitten/components';

class ListCheckBox extends Component {

}

export default class List extends Component {

    state = { checked: false }

    handleClicked = () => {
        this.setState(() => {
            return { checked: true }
        })
    }

    renderItem = ({item, index}) => {
        const { onPressItem } = this.props
        const { checked } = this.state

        return (
            <KittyListItem
                title={item.title}
                onPress={() => onPressItem(index)}
            />
        )
    }

    render() {
        const { list } = this.props

        return <KittyList data={list} renderItem={this.renderItem} />
        // return <View>{list.map(this.renderItem)}</View>
    }
}
