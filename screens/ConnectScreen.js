import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Badge } from "react-native-paper"

export default class ConnectScreen extends React.Component {
    static navigationOptions = {
        title: 'Connect',
        headerStyle: {
            backgroundColor: 'orange',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTitleStyle: {
            fontSize:16,
            fontWeight: '500'
        },
        headerTintColor: '#fff',
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
        * content, we just wanted to give you a quick view of your config */
        return (
            <ScrollView style={styles.container}>
                <View style={styles.messageItem}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Avatar.Text size={50} label="CO" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.message} activeOpacity={0.7} onPress={()=>{this.props.navigation.navigate('Message')}}>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.bold]}>
                                COMPSSA
                            </Text>
                            <Text style={styles.text}>
                                07:08 PM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Some random text
                            </Text>
                            <Badge size={20} >300</Badge>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.messageItem}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Avatar.Text size={50} label="CO" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.message} activeOpacity={0.7} onPress={()=>{this.props.navigation.navigate('Message')}}>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.bold]}>
                                COMPSSA
                            </Text>
                            <Text style={styles.text}>
                                07:08 PM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Some random text
                            </Text>
                            <Badge size={20} >300</Badge>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: 'orange',
    },
    messageItem: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff'
    },
    message: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
        marginRight: 5,
        flex: 1
    },
    bold: {
        fontSize: 18,
        fontWeight: '500'
    }
});
