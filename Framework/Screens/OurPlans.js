import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "../Components/Button";
import {decode} from "html-entities";
 const mark = decode('U+2714');

export function OurPlans(){
return (
    <ScrollView style={styles. container}>
        <Text>{'\u2B24'}</Text>
    {console.log(decode("U+2714"))}
            <Text>Select any plan of your choice</Text>
        <View style={styles.planCotainer}>
        <Text style={styles.planHeader}>Super</Text>
        <View><Text></Text></View>
        <Text>{mark}</Text>
        <Text> {'\u2B24'} Super plan is the plan which garantee you 70 % wining,
             and you can also have access to tips like, 
            single bet,hadicap,double chance and over 1.5 odds</Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    <View style={styles.planCotainer}>
        <Text style={styles.planHeader}>Super +</Text>
        <View><Text></Text></View>
        <Text>Super + plan is the plan which garantee you 85 % wining,
             and you can also have access to tips like, 
            single bet,hadicap,double chance and over 1.5 odds,sure 2 odds,sure 3 odds,
            </Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    <View style={styles.planCotainer}>
        <Text style={styles.planHeader}>Super ++</Text>
        <View><Text></Text></View>
        <Text>Super ++  plan is the plan which garantee you 90 % wining,
             and you can also have access to all tips like, 
            single bet,hadicap,double chance, over 1.5 odds, 2 sure odds, 3 sure odds,10 sure odds, 100 odds, and much more.</Text>
            <Text>duration</Text> 
            {Button("make payment")}
    </View>
    </ScrollView>
    
)
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        backgroundColor:"#f179f1",
        borderWidth:1,
        borderRadius:10,
        margin:5
    },
    planCotainer:{
        borderWidth:2,
        borderRadius:10,
        margin:3,
        padding:5,
        backgroundColor:"#ebe8e8"
    },
    planHeader:{
        alignSelf:"center",
        fontSize:30,
        color:"gold"
    }
})