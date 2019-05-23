import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, StyleSheet, Image, ImageBackground} from "react-native";
import { Icon } from 'expo';
back = require('../assets/images/robot-prod.png')
image = require('../assets/images/robot-dev.png')

export default class LecturerScreen extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return {
            header: null,
            headerTitle: null,
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
                <TouchableOpacity activeOpacity={0.8} style={{ height:34, width:34, marginLeft:15 }} onPress={()=>navigation.goBack()}>
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
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.imager} source={back}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, flexDirection: 'row', alignItems: 'flex-end', }}>
                        <View style={{ padding: 10, flexDirection: 'row',alignItems: 'flex-end', width: '100%' }}>
                            <Image style={styles.image} source={image}/>
                            <Text style={styles.name}>
                                Micheal Soli
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ padding:10 }}>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Email
                        </Text>
                        <Text style={[styles.sectionItemText,{marginLeft:10}]}>
                            tettehsoli@staff.ug.edu.gh
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Phone
                        </Text>
                        <Text style={[styles.sectionItemText,{marginLeft:10}]}>
                            +233 550123292
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Office
                        </Text>
                        <Text style={[styles.sectionItemText,{marginLeft:10}]}>
                            Room 23
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>
                            Office Hours
                        </Text>
                        <View style={{ padding: 10}}>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemText}>
                                    Monday
                                </Text>
                                <Text style={styles.sectionItemText}>
                                    12:30
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemText}>
                                    Tuesday
                                </Text>
                                <Text style={styles.sectionItemText}>
                                    12:30
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text style={styles.sectionItemText}>
                                    Friday
                                </Text>
                                <Text style={styles.sectionItemText}>
                                    12:30
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    description: {
        color: '#fff',
        fontSize: 18,
    },
    sectionHeader: {
        color: '#fff',
        fontSize: 11,
        marginBottom: 2,
    },
    sectionItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
    },
    tr: {
        flexDirection: 'row',
        marginBottom: 2
    },
    week: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
        width: 80
    },
    activity: {
        color: '#fff',
        fontSize: 17,
        flex: 1,
    },
    section: {
        marginVertical: 10
    },
    sectionItemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    name: {
        color: '#fff',
        fontSize: 36,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 20
    },
    imager: {
        width: '100%',
        height: 250,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 150,
        borderColor: '#fff',
        borderWidth: 4
    }
});