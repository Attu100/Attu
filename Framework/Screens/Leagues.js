import { View } from "react-native";
import { Button } from "../Components/Button";

export function Leagues (){
    return (
        <View style={{flexDirection:"row"}}>
            {Button ("country")}
            {Button ("leagues")}
            {Button ("predictions")}
            {Button ("over")}
        </View>
    )
}