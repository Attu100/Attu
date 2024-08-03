import { StyleSheet, View } from "react-native";
import { Button } from "../Components/Button";
export function TipsStore (){
    return (
        <View style ={styles.tips}>
            {Button("over/under")} 
            { Button("H/F")}
            { Button("expert Acca")}
            {Button("handicap")}
            { Button("sure 3 odd")}
            { Button("sure 2 odd")}
            {Button("correct score")}
            {Button("10 min draw")}
            { Button("both to score")}
        </View>
    )
}

const styles =StyleSheet.create({
    tips:{
        flex:1,
        borderWidth:3,
        borderRadius:10,
        backgroundColor:"#f8f6f6"
    }
})