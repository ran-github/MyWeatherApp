import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import useGetWeather from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";



export default function App() {
  const [isLoading, error, weather] = useGetWeather();
  if ( weather && weather.list && !isLoading ) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

  return (
    <View style={StyleSheet.container}>
      { error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} /> 
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    //alignContent: "center",
    flex: 1,
  }
})