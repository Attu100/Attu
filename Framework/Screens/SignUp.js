import { useContext, useState } from "react";
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { AppContext } from "../Components/GlobalVariable";

export function SignUpScreen({navigation}){
    const {userInformation,setUserInformation}=useContext(AppContext)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                {/* <FontAwesomeIcon icon={faUserCircle} size="100" color="gold"/> */}
                <Image source={require("../../assets/Screenshot_20230912-222618.jpg")}  resizeMode ="contain" style={{width:99,height:99,borderRadius:50}} defaultSource={require("../../assets/user.png")}/>
            </View>
            <TouchableOpacity 
                    style={styles.button} 
                   onPress={()=>navigation.navigate("Login")}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
            <View style={[styles.inputContainer,]}>
                <Text>{userInformation.firstName}</Text>
                <TextInput 
                    placeholder="First name"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="Other name"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="Email"  
                    style={styles.inputField}
            
                />
                <TextInput 
                    placeholder="Phone number"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="Gender"  
                    style={styles.inputField}
                
                />
                <TextInput 
                    placeholder="Date of birth"  
                    style={styles.inputField}
                />
                <TextInput 
                    placeholder="Nationality"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="State"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="LGA"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="Password"  
                    style={styles.inputField}
                    
                />
                <TextInput 
                    placeholder="Confirm Password"  
                    style={styles.inputField}
                    
                />
                
                <Text>Already have account  
                    <TouchableOpacity style={{padding:4}}> <Text style={{padding:4,backgroundColor:"gold",fontWeight:"700"}}> Login</Text>
                </TouchableOpacity></Text>
            </View>
            
        </ScrollView>


    )
}


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        backgroundColor:"hsla(289, 92%, 85%, 0.961)",
        borderWidth:3,
        borderRadius:10,
        margin:10,
        padding:5
    },
    profileImage:{
        width:100,
        height:100,borderRadius:75,
        justifyContent:"center",
        alignItems:"center",
        objectFit:"contain",
        borderWidth:2
    },
    imageContainer:{
        borderRadius:10,
        height:200,
        margin:5,
        padding:10,
        paddingBottom:0, 
        alignItems:"center",
        justifyContent:"center"
    },
        inputField:{
            width:"70%",
            borderRadius:10,
            backgroundColor:"purple",
            color:"gold",
            padding:5,
            margin:5
    },
    

    button:{
        width:70,
        height:30,
        backgroundColor:"gold",
        borderRadius:8,
        padding:5,
        justifyContent:"center",
        alignItems:"center"
    },
    inputContainer:{ 
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        borderRadius:10,
        padding:10,
        backgroundColor:"#f8d4f8f5",

    }
})