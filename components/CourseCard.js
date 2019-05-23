import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, Dimensions} from 'react-native'

const width = Dimensions.get('window').width

export default class CourseCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.time}>
                    <Text style={styles.timeText}>09:30</Text>
                    <View style={{ borderWidth: 1, borderColor: 'white',width: 20 }}></View>
                    <Text style={styles.timeText}>11:20</Text>
                </View>
                <View style={[styles.venue]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.timeText}>CSCD 202</Text>
                        <Text style={styles.timeText}> : </Text>
                        <Text style={styles.timeText}>Programming with Java</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'white',width: width-130 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.timeText}>JQB 22</Text>
                        <Text style={styles.timeText}> | </Text>
                        <Text style={styles.timeText}>Mr. Michael Soli</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width-30,
        height: 80,
        backgroundColor: 'orangered',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
    },
    time:{
        flexDirection: 'column',
        width: 70,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
    },
    venue: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: 5,
    },
    timeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    main: {
        flex: 1,
        flexDirection: 'column',
    },
});
