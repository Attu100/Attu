import { useState } from "react"
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
export function EditeProfile ({navigation}){

    const timeOut = ()=>{
        setTimeout(()=>{
            navigation.goBack()
        },1000)
        }
        const [profileImage,setProfileImage]=useState()
       setTimeout(()=>{
       setProfileImage( require("../../assets/Screenshot_20230912-222618.jpg"))
       },3000) 
    return (
        <ScrollView style={styles.container}>
            <View style={{justifyContent:"center",alignItems:'center'}}> 
                <View style={styles.profileImage}>
                    <Image source={profileImage} defaultSource={require("../../assets/user.png")} style={{width:99,borderWidth:2,height:99,borderRadius:50}}/>
                    <TouchableOpacity style={styles.profileImageButton} onPress={{}}>
                        <Text style={{textAlign:"center",color:"white"}}>+</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{margin:10,width:"100%",alignItems:"center"}}>
                    <TextInput defaultValue="Attu" style={styles.profileDetailField}/>  
                    <TextInput defaultValue="Raphael" style={styles.profileDetailField}/>  
                    <TextInput readOnly={true} defaultValue="raphaelattu558@gmail.com" style={styles.profileDetailField}/>   
                    <TextInput defaultValue="phone" style={styles.profileDetailField}/>  
                    <TextInput readOnly={true} defaultValue="password" style={styles.profileDetailField}/>  
                    <TextInput defaultValue="gender" style={styles.profileDetailField}/>
                    <TextInput defaultValue="date of birth" style={styles.profileDetailField}/>   
                    <TextInput defaultValue="nationality" style={styles.profileDetailField}/>   
                    <TextInput defaultValue="state" style={styles.profileDetailField}/>   
                    <TextInput defaultValue="LGA." style={styles.profileDetailField}/>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.editeProfileButton} onPress={()=>timeOut()}>
                        <Text style={{textAlign:"center"}}>submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        backgroundColor:"#f0b8fcf5",
        borderRadius:10,
        margin:10,
        
    },
        profileImage:{
            width:100,
            marginTop:10,
            height:100,
            borderWidth:2,
            borderRadius:75,
            justifyContent:"center",
            objectFit:"contain",
        },
        profileDetailField:{
            width:"50%",
            borderRadius:10,
            padding:5,
            margin:3,
            color:"gold",
            backgroundColor:"purple"
        },
        editeProfileButton:{
            padding:4,
            width:100,
            marginTop:5,
            backgroundColor:"gold",
            borderRadius:10
        },
        profileImageButton:{
            width:13,
            height:13,
            padding:1,
            marginTop:5,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"gold",
            borderRadius:5,
            position:"absolute",
            bottom:-10,
            right:"42%"
        }
})