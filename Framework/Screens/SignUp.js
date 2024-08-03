import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";




export function SignUpScreen({navigation}){
   const {userInformation, setUserinfomation}=useState({
        firstName, 
        otherName,
        PhoneNumber,
        dateOfbirth,
        gender,
        nationality,
        state,
        LGA,
        password
    })
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
        <ScrollView>
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
               // onPress={navigation.navigate("Login")}
            >
                <Text>Register</Text>
            </TouchableOpacity>
        </ScrollView>


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
        width:20,padding:5,
        borderWidth:4,
        justifyContent:"center",
        alignItems:"center"
    }
})