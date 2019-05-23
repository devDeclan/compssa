import React from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Avatar, Badge } from 'react-native-paper';
import { Icon } from 'expo';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ResourceScreen from '../screens/ResourceScreen';
import ConnectScreen from '../screens/ConnectScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MoreScreen from '../screens/MoreScreen';
import MapsScreen from '../screens/MapsScreen';
import CourseScreen from '../screens/CourseScreen';
import LecturerScreen from '../screens/LecturerScreen';
import MessageScreen from '../screens/MessageScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Schedule: ScheduleScreen,
},{
    mode: 'modal',
    headerMode: 'screen'
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' ? 'ios-time' : 'md-time'
            }
        />
    ),
};

const ResourceStack = createStackNavigator({
    Links: ResourceScreen,
});

ResourceStack.navigationOptions = {
    tabBarLabel: 'Resource',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
        />
  ),
};

const ConnectStack = createStackNavigator({
    Connect: ConnectScreen,
});

ConnectStack.navigationOptions = {
    tabBarLabel: 'Connect',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
        />
    ),
};

const MapStack = createStackNavigator({
    Maps: MapsScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Maps',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
        />
    ),
};

const MoreStack = createStackNavigator({
    More: MoreScreen,
});

MoreStack.navigationOptions = {
    tabBarLabel: 'More',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
        />
    ),
};

const NotificationStack = createStackNavigator({
    Notification: NotificationScreen,
});

const MessageStack = createStackNavigator({
    Message: MessageScreen,
});

const DescriptionStack = createStackNavigator({
    Course: CourseScreen,
    Lecturer: LecturerScreen,
},{
    mode: 'modal'
});

const Main = createMaterialBottomTabNavigator({
    HomeStack,
    ResourceStack,
    ConnectStack,
    MapStack,
    MoreStack,
},{
    shifting: false,
    activeColor: 'white',
    inactiveColor: 'rgba(255,255,255,0.7)',
    barStyle: {
        backgroundColor: 'orange',
        elevation: 0,
        shadowOpacity: 0
    },
});

export default createDrawerNavigator({
    Main :{
        screen: Main
    },
    Notifications:{
        screen: NotificationStack
    },
    Description: {
        screen: DescriptionStack
    },
    Message: {
        screen: MessageStack
    }
},{
    drawerType: 'slide',
    contentComponent: (props) => {
        return(
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between',height: 250, backgroundColor: 'orange', padding: 10 }}>
                    <View>
                        <Avatar.Text size={70} label="HW" />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black' }}>Hellen Wanki</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>Computer Science</Text>
                    </View>
                </View>
                <ScrollView>
                    <DrawerItems {...props} />
                    <Text>Your Own Footer Area After</Text>
                </ScrollView>
            </View>
        )
    },
})