import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import TodaySchedule from '../components/TodaySchedule';
import Action from '../components/Action';
import { Avatar, Badge } from 'react-native-paper';
import { Icon } from 'expo';
import { DrawerActions } from 'react-navigation';

const width = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        
    }
    state = {
        curTime: '',
        curDate: '',
        curAm: '',
    }

    componentDidMount() {
        setInterval( () => {
            var calendar = new Date();
            var day;
            switch (calendar.getDay()) {
                case 0:
                    day = 'Sun';
                    break;
                case 1:
                    day = 'Mon';
                    break;
                case 2:
                    day = 'Tue';
                    break;
                case 3:
                    day = 'Wed';
                    break;
                case 4:
                    day = 'Thur';
                    break;
                case 5:
                    day = 'Fri';
                    break;
                default:
                    day = 'Sat'
                    break;
            }
            var date = calendar.getDate();
            var month;
            switch (calendar.getMonth()) {
                case 0:
                    month = 'January';
                    break;
                case 1:
                    month = 'February';
                    break;
                case 2:
                    month = 'March';
                    break;
                case 3:
                    month = 'April';
                    break;
                case 4:
                    month = 'May';
                    break;
                case 5:
                    month = 'June';
                    break;
                case 6:
                    month = 'July';
                    break;
                case 7:
                    month = 'August';
                    break;
                case 8:
                    month = 'September';
                    break;
                case 9:
                    month = 'October';
                    break;
                case 10:
                    month = 'November';
                    break;
                default:
                    month = 'December'
                    break;
            }
            var hour = calendar.getHours();
            var ampm;
            if (hour/12>=1&&hour/12<2) {
                ampm = 'PM'
            } else {
                ampm = 'AM'
            }
            var minutes = calendar.getMinutes();
            this.setState({
                curDate: day + ', ' + month + ' ' + date,
                curTime: ('0'+(hour%12)).slice(-2) +':'+ ('0'+minutes).slice(-2),
                curAm: ampm
            })
        },1000)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Schedules',
            headerStyle: {
                backgroundColor: 'orange',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize:16,
                fontWeight: '500'
            },
            headerRight: (
                <TouchableOpacity activeOpacity={0.8} style={{ height:34, width:34, marginRight:10 }} onPress={()=>navigation.openDrawer()}>
                    <Icon.Ionicons
                        name={
                            Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'
                        }
                        size={34}
                        color="rgba(255,255,255,0.7)"
                    />
                    <Badge
                        style={{ position: 'absolute'}}
                        size={12}
                    >3</Badge>
                </TouchableOpacity>
            ),
        };
    }



    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.main}>
                    <View style={[styles.section,{ marginHorizontal: 20,flexDirection: 'row', justifyContent: 'space-between',alignItems: 'flex-end',}]}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems:'flex-end',}}><Text style={{ color: '#fff', fontSize: 38 }}>{this.state.curTime}</Text><Text style={{ color: '#fff', fontSize: 14, paddingBottom: 5  }}>{this.state.curAm}</Text></View>
                            <Text style={{ color: '#fff', fontSize: 16 }}>{this.state.curDate}</Text>
                        </View>
                        <View>
                            <Icon.Ionicons name="ios-cloud-outline" color="#fff" size={38}/>
                            <Text style={{ color: '#fff', fontSize: 16 }}>90 F</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Today</Text>
                        <ScrollView style={styles.today} horizontal={true} decelerationRate={'fast'} snapToInterval={290} snapToAlignment={"center"} showsHorizontalScrollIndicator={false}>
                            <TodaySchedule/>
                            <TodaySchedule/>
                            <TodaySchedule/>
                            <TodaySchedule/>
                            <TodaySchedule/>
                            <TodaySchedule/>
                            <View style={{ width: 20 }}></View>
                        </ScrollView>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Calenders</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Class Schedules"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Exam Schedules"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Interim Schedules"/>
                            </TouchableOpacity>                            
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Academic Calender"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Calenders</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Class Schedules"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Exam Schedules"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Interim Schedules"/>
                            </TouchableOpacity>                            
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} activeOpacity={0.8}>
                                <Action name="Academic Calender"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    profile: {
        paddingTop: 35,
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    main: {
        flex: 1,
    },
    today: {
        paddingHorizontal: 10,
    },
    sectionHeader: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    notification: {
        height: 40,
        width: 40 ,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        borderRadius: 5
    },
    section: {
        marginBottom: 20,
    }
});
