import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default class Schedule extends React.Component {
    constructor(props){
        super(props);
        
    }
    state = {
        visibleDetails: false,
    }
    toggleModal = () => {
        this.setState({ visibleDetails: !this.state.visibleDetails });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timeSection}>
                    <Text style={styles.startTime}>
                        09:30
                    </Text>
                    <Text style={styles.stopTime}>
                        11:20
                    </Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.title}>
                        CSCD 202 : Programming with Java
                    </Text>
                    <View style={{ flexDirection:'row' }}>
                        <Text style={styles.venue}>
                            JQB 22 : Micheal Soli
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    startTime: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        fontWeight: 'normal',
    },
    stopTime: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: 'normal',
    },
    venue: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: 'normal',
    },
    lecturer: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: 'normal',
    },
    title: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        fontWeight: '500',
    },
    infoSection: {
        marginRight: 10,
        marginVertical: 10,
        flex: 1,
    },
    timeSection: {
        width: 45,
        alignItems: 'flex-end',
        margin: 10,
    }
});
