import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {colors} from '../utils/index'

const {PRIMARY_COLOR,SECONDARY_COLOR,BORDER_COLOR}=colors;
const WeatherInfo = ({currentWeather}) => {

    const {main:{temp},
weather:[details],
name
}=currentWeather;

const{icon,main,description}=details
const iconUrl=`https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.WeatherInfo}>
            <Text style={styles.city}>{name}</Text>
            <Image source={{uri:iconUrl}} style={styles.image}/>
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>

        </View>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    WeatherInfo:{
alignItems:'center'
    },
    image:{
        width:100,
        height:100
    },
    description:{
        textTransform:'capitalize'
    },
    textPrimary:{
        fontSize:40,
        color:PRIMARY_COLOR
    },
    textSecondary:{
        fontSize:20,
        color:SECONDARY_COLOR,
        fontWeight:'500',
        marginTop:10
    }
})
