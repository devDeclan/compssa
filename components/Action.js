import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors';

const width = Dimensions.get('window').width;

export default class Action extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: (width-40)/2,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        margin: 5,
        padding: 10,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontWeight: '200',
    }
});
