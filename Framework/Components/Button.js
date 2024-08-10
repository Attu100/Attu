import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function  Button (ButtonName, onpress){
    return (
         
            <TouchableOpacity onPress={()=>{{onpress}}} style={styles.Button}>
                <Text style={{textAlign:"center", width:100}} >{ButtonName}</Text>
            </TouchableOpacity>
        

    )
}

const styles = StyleSheet.create({
    Button:{
        padding:1,
        width:100,
        margin:2,
        borderRadius:10,
        backgroundColor:"gold",
        alignItems:"center",
        justifyContent:"center",

    },
    buttonField:{
        borderWidth:2,
        height:31,
    }
})
