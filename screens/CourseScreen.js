import React from 'react';
import { Text, TouchableOpacity, ScrollView, View, StyleSheet } from "react-native";
import { Icon } from 'expo';

export default class CourseScreen extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return {
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
                <TouchableOpacity activeOpacity={0.8} style={{ height:34, width:34, marginLeft:15 }} onPress={()=>navigation.navigate('Schedule')}>
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
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.day}>
                        3 Credit Hours
                    </Text>
                    <Text style={styles.venue}>
                        Computer Science
                    </Text>
                </View>
                <View style={{ marginVertical: 25 }}>
                    <Text style={styles.title}>
                        Code : Title
                    </Text>
                </View>
                <View style={{ marginBottom: 22 }}>
                    <Text style={styles.description}>
                        This is the long long descriptionfor the Course
                        lorem impudshfhsnffsssfkkkkkkkj jdfjjffjjfjf fjsjxnjcxnjxnc jdnfjdnfjjd xjcjxjnn fjvdn
                    </Text>
                </View>
                <View style={{ marginBottom: 22 }}>
                    <Text style={styles.sectionHeader}>
                        Lecturer
                    </Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Lecturer')}}>
                        <Text style={styles.sectionItem}>
                            Lecturer Name
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.sectionHeader}>
                        Course Outline
                    </Text>
                    <View style={{ padding:10 }}>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
                        </View>
                        <View style={styles.tr}>
                            <Text style={styles.week}>
                                Week 01
                            </Text>
                            <Text style={styles.activity}>
                                Activity and  dksks ksfnnf ksnfkkskfn ksfnkn fsksnfnf skfnkfns fksn  sflfm,s knffsf
                            </Text>
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
        paddingHorizontal: 20,
    },
    venue: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: '500',
    },
    day: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        marginRight: 20,
    },
    title: {
        color: '#fff',
        fontSize: 46,
    },
    description: {
        color: '#fff',
        fontSize: 18,
    },
    sectionHeader: {
        color: '#fff',
        fontSize: 11,
        marginBottom: 2
    },
    sectionItem: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10
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
    }
});
