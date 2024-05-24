import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather( { weatherData } ) {
  const { wrapper, container, tempStyles, feelsStyles, highLowWrapper, highLow, description, message, bodyWrapper } = styles

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
  const weatherCondition = weather[0].main;


  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{Math.round(temp)}°F</Text>
        <Text style={feelsStyles}>{`Feels like: ${Math.round(feels_like)}°C`}</Text>
        <RowText
            messageOne={`High: ${Math.round(temp_max)}°F`}
            messageTwo={`Low: ${Math.round(temp_min)}°F`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}          
        />
      </View>
        <RowText
            messageOne={weather[0]?.description}
            messageTwo={weatherType[weatherCondition]?.message}
            containerStyles={bodyWrapper}
            messageOneStyles={description}
            messageTwoStyles={message}          
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feelsStyles: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
