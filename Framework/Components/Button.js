import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function  Button (ButtonName ="" ){
    return (
        <View style={styles.buttonField}>
            <TouchableOpacity>
                <Text>{ButtonName}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    Button:{
        width:40,
        height:30,
        padding:3,
        margin:3,
        backgroundColor:"gold",
        color:"white"

    },
    buttonField:{
        width:41,
        height:31,

    }
})
