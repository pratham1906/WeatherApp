import React from 'react'
import { StyleSheet, Text, View ,Platform} from 'react-native'
import {AntDesign,Ionicons} from '@expo/vector-icons'

import {colors} from '../utils/index'
const reloadIcon = ({load}) => {

    const ReloadIconName=Platform.OS=='ios'?'ios-refresh':'md-refresh'
    return (
        <View style={styles.reloadIcon}>
         
            <Ionicons onPress={load} name={ReloadIconName} size={24} color={colors.PRIMARY_COLOR}/>
        </View>
    )
}

export default reloadIcon

const styles = StyleSheet.create({
    reloadIcon:{
        position:'absolute',
        top:30,
        right:20
    }
})
