import { ScrollView, View } from "react-native";
import { Button } from "../Components/Button";

export function OurPlans(){
return (
    <ScrollView>
        <View>
            <Text>Select any plan of your choice</Text>
        <Text>Super</Text>
        <View><Text>{currency}:{amount}</Text></View>
        <Text>Super plan is the plan which garantee you 70 % wining,
             and you can also have access to tips like, 
            single bet,hadicap,double chance and over 1.5 odds</Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    <View>
        <Text>Super +</Text>
        <View><Text>{currency}:{amount}</Text></View>
        <Text>Super + plan is the plan which garantee you 85 % wining,
             and you can also have access to tips like, 
            single bet,hadicap,double chance and over 1.5 odds,sure 2 odds,sure 3 odds,
            </Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    <View>
        <Text>Super ++</Text>
        <View><Text>{currency}:{amount}</Text></View>
        <Text>Super ++  plan is the plan which garantee you 90 % wining,
             and you can also have access to all tips like, 
            single bet,hadicap,double chance, over 1.5 odds, 2 sure odds, 3 sure odds,10 sure odds, 100 odds, and much more.</Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    </ScrollView>
    
)
}