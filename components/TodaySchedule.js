import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default class TodaySchedule extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.courseTitle}>
                        Programming with Java
                    </Text>
                    <Text style={styles.courseMaster}>
                        Mr. Micheal Soli
                    </Text>
                </View>
                <View style={styles.timeVenue}>
                    <View style={styles.courseCode}> 
                        <Text>CSCD 202</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>9:30 - 11:20</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.venue} onPress={()=>{this.props.navigation.navigate('maps')}}> 
                    <Text>JQB 22</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 160,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        margin: 5,
        padding: 15,
    },
    timeVenue: {
        position: "absolute",
        borderRadius: 5,
        height: 28,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bottom: 0,
        width: 160,
        margin: 15,
        flexDirection: 'row',
    },
    venue: {
        position: "absolute",
        borderRadius: 5,
        height: 28,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        bottom: 0,
        margin: 15,
        right: 0
    },
    courseTitle: {
        fontWeight: '400',
        fontSize: 20,
        color: 'white'
    },
    courseMaster: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white'
    }
});
