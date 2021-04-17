import React from 'react'
import { StyleSheet, Text, View ,Platform} from 'react-native'
import {Picker} from '@react-native-picker/picker'


const UnitsPicker = ({unitsSystem,setUnitsSystem}) => {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitsSystem} onValueChange={(item)=>setUnitsSystem(item)} style={{height:35}} itemStyle={{fontSize:12}}>
                <Picker.Item label="C°" value="metric"  />
                <Picker.Item label="F" value="imperial"/>


            </Picker>
        </View>
    )
}

export default UnitsPicker

const styles = StyleSheet.create({


    unitsSystem:{
        position:'absolute',
        top:30,
       
        left:30,
        height:50,
        width:100
    }
})
