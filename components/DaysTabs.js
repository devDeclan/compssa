import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DaysTabs extends Component {
    constructor(props) {
        super(props)
        this.setAnimationValue = this.setAnimationValue.bind(this)
    }

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
    }

    setAnimationValue({value}) {
        // this.tabIcons.forEach((icon, i) => {
        //   const progress = Math.min(1, Math.abs(value - i))
        //   icon.setNativeProps({
        //     style: {
        //       color: this.iconColor(progress)
        //     }
        //   })
        // })
    }

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 59 + (204 - 59) * progress
        const green = 89 + (204 - 89) * progress
        const blue = 152 + (204 - 152) * progress
        return `rgb(${red}, ${green}, ${blue})`
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    {this.props.tabs.map((tab,i)=>{
                        if(this.props.activeTab === i){
                            return (
                                <View key={tab} style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 48, color: '#fff' }}>{tab},</Text>
                                    <Text style={{ fontSize: 24, color: '#fff' }}>2nd March, 2019</Text>
                                </View>
                            )
                        }
                    })}
                </View>
                <View style={[styles.tabs, this.props.style]}>
                    {this.props.tabs.map((tab, i) => {
                        return (
                        <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                            <View style={[styles.textView,{backgroundColor: (this.props.activeTab === i ? 'rgba(255,255,255,1)':'rgba(255,255,255,0.7)')}]}>
                                <Text style={styles.text}>
                                    {tab}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 10,
    },
    textView: {
        borderRadius: 100,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 11,
    },
    header: {
        height: 120,
        padding: 10,
        alignItems: 'flex-end'
    }
})