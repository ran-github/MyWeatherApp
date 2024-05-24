import React from "react";
import { FlatList, ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { ListItem } from "../components/ListItem";

const Empty = () => {}

export default function UpcomingWeather( {weatherData}) { 
    function renderItem({item}) {
        return (
        <ListItem condition=
            {item.weather[0].main}
            dt={item.dt}
            min={item.main.temp_min}
            max={item.main.temp_max}
            >
        </ListItem>
    )}

    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/img/starry_sky.jpg")}
                style={image}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt}
                    ItemSeparatorComponent={() => <View style={{backgroundColor: "red"}}></View>}
                    ListEmptyComponent={Empty}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue",
    },
    item : {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink",
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontSize: 15,
    },
    image: {
        flex: 1,
    },
})