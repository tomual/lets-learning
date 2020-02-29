import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

export default function Button(props) {
    return <TouchableOpacity onPress={props.onpress} style={styles.btn}>
        <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
}