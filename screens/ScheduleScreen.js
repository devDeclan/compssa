import React from 'react';
import {ScrollableTabView, ScrollableTabBar} from '@valdio/react-native-scrollable-tabview';
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import Schedule from "../components/Schedule";
import { Icon } from "expo";
import DaysTabs from "../components/DaysTabs";

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({navigation})=> {
        return {
            title: 'Class Schedules',
            headerStyle: {
                backgroundColor: 'orange',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                marginLeft: -10,
                fontSize:16,
                fontWeight: '500'
            },
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
                <ScrollableTabView
                    refreshControlStyle={{backgroundColor: 'red'}}
                    showsHorizontalScrollIndicator={false}
                    renderTabBar={() => <DaysTabs/>}
                    tabBarBackgroundColor={"orange"}
                    style={{backgroundColor:'orange'}}
                    >
                    <ScrollView tabLabel="Sun" >
                        <View>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Course')}}>
                                <Schedule/>
                            </TouchableOpacity>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Mon" >
                        <View>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Tue" >
                        <View>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Wed" >
                        <View>
                        <Text>Two</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Thr" >
                        <View>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Fri" >
                        <View>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="Sat" >
                        <View>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                            <Schedule/>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
        )
    }
}