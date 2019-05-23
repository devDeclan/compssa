import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, StyleSheet, Platform } from "react-native";
import { Icon } from 'expo';

export default class NotificationScreen extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return {
            headerTitle: 'Notifications',
            headerTitleStyle:{
                marginLeft: -10,
                fontSize:16,
                fontWeight: '500'
            },
            headerStyle: {
                backgroundColor: 'orange',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerLeft: (
                <TouchableOpacity activeOpacity={0.8} style={{ height:34, width:34, marginLeft:15 }} onPress={()=>navigation.navigate('Main')}>
                    <Icon.FontAwesome
                        name='angle-left'
                        size={32}
                        color="rgba(255,255,255,0.8)"
                    />
                </TouchableOpacity>
            ),
        }
    };
   
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Notification Screen</Text>
            </View>
        )
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
