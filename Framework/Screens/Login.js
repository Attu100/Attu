import { View,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity, Image} from "react-native";
import {useContext, useState} from "react";
import { AppContext } from "../Components/GlobalVariable";


export function Login({navigation}){


    const [allow,setAllow] = useState(false)
const handleClearInput = ()=>{
    setEmail("");
    setPassword("")
}
const {userInformation}=useContext(AppContext)
    const check = (value)=>{
        userInformation.firstName ==value ? setAllow(true) : null
    }
    const Confirm = ()=>{
    allow ? navigation.navigate("Home") : null
    }


    return (
    <View style={styles.container}>
        <View style={ styles.imageContainer}>
        <View style={styles.profileImage}>
            <Image source={require("../../assets/Screenshot_20230912-222618.jpg")}  resizeMode ="contain" style={{width:99,height:99,borderRadius:50}}/>
        </View>
        </View>
         <View style={styles.inputContainer}>
            <Text>email</Text>
         <TextInput 
                placeholder="Email"  
                style={styles.inputField}
                onChangeText={(value) => check(value)}
            />
            <TextInput 
                placeholder="Password"  
                style={styles.inputField}
                onChangeText={(value) => {}}
            />

            <TouchableOpacity 
                onPress={Confirm}
                style={styles.button} 
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>Do not have account <TouchableOpacity onPress={()=>{navigation.navigate("RefundPolicy")}} style={{padding:4}}>
                 <Text style={{padding:4,backgroundColor:"gold",fontWeight:"900"}}>SignUp</Text>
                 </TouchableOpacity>
                 </Text> 
         </View>       
    </View>
    )
    }


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        justifyContent:"center",
        flex:1,
        backgroundColor:"#f0b8fcf5",
        borderWidth:3,
        borderRadius:10,
        margin:10,
        padding:5
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
    profileImage:{
        width:100,
        height:100,borderRadius:75,
        justifyContent:"center",
        alignItems:"center",
        objectFit:"contain"
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
    inputContainer:{ 
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        borderRadius:10,
        padding:10,
        backgroundColor:"#f8d4f8f5",

    }
    
})
       