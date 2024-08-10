import { useState } from "react";
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
export function SignUpScreen({navigation}){
    const {firstName, setFirstName}=useState("")
    const {otherName, setOtherName}=useState("")
    const {email, setEmail}=useState("")
    const {PhoneNumber, setPhoneNumber}=useState("")
    const {gender, setGender}=useState("")
    const {dateOfbirth, setDateOfBirth}=useState("")
    const {nationality,setNationality}=useState("")
    const{state,setState}=useState("")
    const {LGA,setLGA}=useState()
    const {password,setPassword}=useState("")
    const {userUID,setUserUID}=useState(Math.random()*1000000)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                {/* <FontAwesomeIcon icon={faUserCircle} size="100" color="gold"/> */}
                <Image source={require("../../assets/Screenshot_20230912-222618.jpg")}  resizeMode ="contain" style={{width:99,height:99,borderRadius:50}} defaultSource={require("../../assets/user.png")}/>
            </View>
            <View style={[styles.inputContainer,]}>
                <TextInput 
                    placeholder="First name"  
                    style={styles.inputField}
                    onChangeText={value => setFirstName(value)}
                />
                <TextInput 
                    placeholder="Other name"  
                    style={styles.inputField}
                    onChangeText={value => setOtherName(value)}
                />
                <TextInput 
                    placeholder="Email"  
                    style={styles.inputField}
                    onChangeText={value => setEmail(value)}
                />
                <TextInput 
                    placeholder="Phone number"  
                    style={styles.inputField}
                    onChangeText={value => setPhoneNumber(value)}
                />
                <TextInput 
                    placeholder="Gender"  
                    style={styles.inputField}
                    onChangeText={value => setGender(value)}
                />
                <TextInput 
                    placeholder="Date of birth"  
                    style={styles.inputField}
                    onChangeText={value => setDateOfBirth(value)}
                />
                <TextInput 
                    placeholder="Nationality"  
                    style={styles.inputField}
                    onChangeText={value => setNationality(value)}
                />
                <TextInput 
                    placeholder="State"  
                    style={styles.inputField}
                    onChangeText={value => setState(value)}
                />
                <TextInput 
                    placeholder="LGA"  
                    style={styles.inputField}
                    onChangeText={value => setLGA(value)}
                />
                <TextInput 
                    placeholder="Password"  
                    style={styles.inputField}
                    onChangeText={value => setPassword(value)}
                />
                <TextInput 
                    placeholder="Confirm Password"  
                    style={styles.inputField}
                    onChangeText={value => setConfirmPassword(value)}
                />
                <TouchableOpacity 
                    style={styles.button} 
                //    onPress={navigation.navigate("Login")}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
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