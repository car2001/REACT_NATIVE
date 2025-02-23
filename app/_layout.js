import { Slot } from "expo-router";
import { View, Text } from "react-native"
import "../global.css";

export default function Layout(){
    return(
        <View className="flex-1 bg-black items-center justify-center">
            <Slot />
        </View>
    )
}