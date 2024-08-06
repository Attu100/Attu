import { Text, View } from "react-native";
import { Button } from "../Components/Button";

export function PaymentMethod (){
    return (
        <View>
            <Text style={{margin:5}}>payment method</Text>
            <Text>This payment method is fast and secure</Text>
            {Button("Paystack")} 
        </View>
    )
}