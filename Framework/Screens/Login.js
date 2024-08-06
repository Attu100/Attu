import { Pressable,View,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity,Button} from "react-native";
import {useState} from "react";

export function Login({navigation}){

const {email, setEmail}=useState("")
const {password,setPassword}=useState("")


    return (
    <View style={styles.container}>
        <View style={styles.profileImage}>

        </View>
        
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
            
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>Do not have account</Text> 
                   
    </View>
    )
    }


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        borderWidth:3,
        borderRadius:10,
       paddingTop:"30%",
        alignItems:"center",
        margin:4,
        marginBottom:100
    },
    inputField:{
        width:"70%",
        borderRadius:10,
        borderWidth:4,
        color:"#8605807a",
        padding:5,
        margin:5
    },
    button:{
        width:50,
        height:30,
        backgroundColor:"gold",
        borderRadius:8,
        padding:5,
        borderWidth:4,
        justifyContent:"center",
        alignItems:"center"
    },
    profileImage:{
        width:100,
        height:100,borderRadius:50,
        borderWidth:4
    }
})
       