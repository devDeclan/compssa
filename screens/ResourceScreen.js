import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default class ResourceScreen extends React.Component {
    static navigationOptions = {
        title: 'Resources',
        headerStyle: {
            backgroundColor: 'orange',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTitleStyle: {
            fontSize:16,
            fontWeight: '400'
        },
        headerTintColor: '#fff',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>All your slides are here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
