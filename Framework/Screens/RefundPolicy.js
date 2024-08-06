import { Text, View } from "react-native";
import { Button } from "../Components/Button";

export function RefundPoliy (){
    return (
        <View>
            <Text>hi {userName}. 
                this is to let you know that before
                making any payments try to go through it
                as payments are non refundable. 
                thanks.
            </Text>
            {Button("OK")}
        </View>
    )
}