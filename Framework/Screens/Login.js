import { Pressable,View,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity,Button} from "react-native";
import {useState} from "react";

export function Login({navigation}){

const {email, setEmail}=useState("")
const {password,setPassword}=useState("")


    return (
    <View style={styles.container}>
            <TextInput 
                placeholder="Email"  
                style={styles.inputField}
                onChangeText={value => setEmail(value)}
            />
            <TextInput 
                placeholder="Password"  
                style={styles.inputField}
                onChangeText={value => setConfirmPassword(value)}
            />
            <TouchableOpacity 
                style={styles.button} 
                // onPress={navigation.navigate("Home")}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>Do not have account</Text> <Button value="create account" color="green"/>            
        </View>
    )
    }


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    },
    inputField:{
        width:60,
        borderRadius:10,
        borderWidth:4,
        color:"#8605807a",
        padding:5
    },
    button:{
        backgroundColor:"gold",
        borderRadius:8,
        padding:5,
        borderWidth:4,
        justifyContent:"center",
        alignItems:"center"
    }
})
       