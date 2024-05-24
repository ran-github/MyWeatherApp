import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconText from "../components/IconText";
import moment from "moment";


export default function City({ weatherData }) {
    const { container, cityName, cityText, countryName, imageLayout, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles
    const {name, country, population, sunrise, sunset} = weatherData;

    //console.log(weatherData)


    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../assets/img/city2.jpg")} style={imageLayout}>
                <Text style={[cityName, cityText ]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={"user"} iconSize={50} iconColor={"red"} bodyText={`Population: ${population}`} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={"sunrise"} iconSize={50} iconColor={"white"} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
                    <IconText iconName={"sunset"} iconSize={50} iconColor={"white"} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
                </View>                
            </ImageBackground>
        </SafeAreaView>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
    },
    populationWrapper: {
        justifyContent: "center",
        marginTop: 30,
    },
    populationText: {
       fontSize: 25,
       marginLeft: 7.5,
       color: "red",
       fontWeight: "bold", 
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    },
});