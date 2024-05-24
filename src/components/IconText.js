import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconText(props) {
    const { iconName, iconSize, iconColor, bodyText, bodyTextStyles } = props;
    const { container, textTheme } = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={iconSize} color={iconColor}></Feather>
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    textTheme: {
        fontWeight: "bold",
    },
});