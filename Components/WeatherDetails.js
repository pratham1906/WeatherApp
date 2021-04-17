import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/index'
import {Feather,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;


const WeatherDetails = ({ currentWeather,unitsSystem }) => {
    const { main: { feels_like, humidity,pressure },
wind:{speed} } = currentWeather


const windSpeed=unitsSystem=="metric"?`${Math.round(speed)} m/s` :`${Math.round(speed)} miles/hr`;
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBoxx}>
                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={24} color={PRIMARY_COLOR}/>
                    <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Text >Feels like:</Text>
                        <Text style={{fontSize:15,color:SECONDARY_COLOR,fontWeight:'700',margin:7}}>{feels_like}</Text>

                    </View>
                    
                    
                    </View>
                </View>
                <View style={styles.weatherDetailsBoxx}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR}/>
                    <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Text >Humidity:</Text>
                        <Text style={{fontSize:15,color:SECONDARY_COLOR,fontWeight:'700',margin:7}}>{humidity}%</Text>

                    </View>
                    
                    
                    </View>
                </View>
                </View>
                <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBoxx}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR}/>
                    <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Text >Wind Speed:</Text>
                        <Text style={{fontSize:15,color:SECONDARY_COLOR,fontWeight:'700',margin:7}}>{windSpeed}</Text>

                    </View>
                    
                    
                    </View>
                </View>
                <View style={styles.weatherDetailsBoxx}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR}/>
                    <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Text >Pressure:</Text>
                        <Text style={{fontSize:15,color:SECONDARY_COLOR,fontWeight:'700',margin:7}}>{pressure} hPa</Text>

                    </View>
                    
                    
                    </View>
                </View>
                </View>
                
        </View>
    )
}

export default WeatherDetails

const styles = StyleSheet.create({

    weatherDetails: {
        marginTop: 'auto',
        borderWidth: 1,
        margin: 15,
        borderColor: BORDER_COLOR,
        borderRadius: 10
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weatherDetailsBoxx: {
        flex: 1,
        padding: 20,
        borderRightWidth:1
        ,borderRightColor:BORDER_COLOR
    }

,weatherDetailsBox: {
    flex: 1,
    padding: 20,
    
    
}



})
