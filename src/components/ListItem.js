import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

export function ListItem(props) {
    const { dt, min, max, condition } = props;
    const { item, date, temp, dateTextWrapper } = styles
    const dt2 = new Date(dt * 1000);

    return (
        <View style={item}>
            <Feather
                name={weatherType[condition]?.icon}
                size={50}
                color={"white"}>    
            </Feather>
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt2).format('D MMM YYYY')}</Text>
                <Text style={date}>{moment(dt2).format('h:mm a')}</Text>
            </View>
            <Text style={temp}>{Math.round(min)}°F / {Math.round(max)}°F</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item : {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred",
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontSize: 15,
    },
    dateTextWrapper: {
        flexDirection: "column",
    },
})