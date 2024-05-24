import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';

//const useGetWeather = () => {
export default function useGetWeather() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    
    let weatherAPIKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
  
    const fetchWeatherData = async() => {
      try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=imperial`)
        const data = await res.json();
        //console.log(data)
        setWeather(data);
        setIsLoading(false);
      } catch(error) {
        setError("Could not fetch weather")
      } finally {
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      (async() => {
          let { status } = await Location.requestForegroundPermissionsAsync()
          if(status !== "granted") {
            setError("Permission to access location was denied")
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
          await fetchWeatherData()
      })()
    }, [lat, lon])

    return [isLoading, error, weather]
}

//export default useGetWeather