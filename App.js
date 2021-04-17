import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location'
import WeatherInfo from './Components/WeatherInfo'

import UnitsPicker from './Components/UnitsPicker'
import { colors } from './utils';

import ReloadIcon from './Components/reloadIcon'
import WeatherDetails from './Components/WeatherDetails'

import {WEATHER_API_KEY} from 'react-native-dotenv'
import config from './config'








const BASE_WEATHER_URL='https://api.openweathermap.org/data/2.5/weather?'
export default function App() {
const [error,setError]=useState(null)
const [currentWeather,setCurrentWeather]=useState(null)
const[unitsSystem,setUnitsSystem]=useState('metric')




























  useEffect(()=>{
load()
  },[unitsSystem])



  async function load(){
    setCurrentWeather(null)
    setError(null)
    try{
let {status }=await Location.requestPermissionsAsync();

if(status !='granted'){
  setError('Access To Location is needed to run the App');
  return 
}
const location=await Location.getCurrentPositionAsync();
const {latitude,longitude}=location.coords
console.log(latitude);
console.log(longitude);

console.log(process.env);
const weatherUrl=`${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${config.WEATHER_API_KEY}`


const response=await fetch(weatherUrl)
const result=await response.json()
if(response.ok){
  setCurrentWeather(result);
}
else{
  setError(result.message);
}


    }
    catch(error){
setError(error.message)
    }
  }


  if(currentWeather){
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
        <ReloadIcon load={load}/>
         <WeatherInfo currentWeather={currentWeather}/>
         
      </View>
      <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem}/>


      
    </View>
  );
  }
  else if(error){
    return(
      <View>
        <Text>{error}</Text>
        <StatusBar style="light"/>
      </View>
    )
  }
  else{
    return(
      <View style={{flex:1,justifyContent:'center'}}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="light"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  main:{
justifyContent:'center',
flex:1
  }
});
