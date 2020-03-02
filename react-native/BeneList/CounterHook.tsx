import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CounterHook(props) {

    let [count, setCount] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Text style={{ color: props.color, fontSize: props.size }}>
            {count}
        </Text>
    )
}

