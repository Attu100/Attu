import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
export function Profile ({navigation}){
    return (
        <ScrollView style={styles.container}>
            <View style={{justifyContent:"center",alignItems:'center'}}> 
                <View style={styles.profileImage}>
                    <Image defaultSource={require("../../assets/user.png")} style={{width:99,borderWidth:2,height:99,borderRadius:50}}/>
                        <View>
                            <TouchableOpacity onPress={()=>navigation.navigate("EditeProfile")} style={styles.editeProfileButton}>
                                <Text style={{textAlign:"center"}}>edite profile</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                
                <View style={{margin:10,width:"100%",alignItems:"center"}}>
                    <TextInput value="first name" style={styles.profileDetailField}/>  
                    <TextInput value="last name" style={styles.profileDetailField}/>  
                    <TextInput value="email" style={styles.profileDetailField}/>   
                    <TextInput value="phone" style={styles.profileDetailField}/>  
                    <TextInput value="gender" style={styles.profileDetailField}/>
                    <TextInput value="date of birth" style={styles.profileDetailField}/>   
                    <TextInput value="nationality" style={styles.profileDetailField}/>   
                    <TextInput value="state" style={styles.profileDetailField}/>   
                    <TextInput value="LGA." style={styles.profileDetailField}/>
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
            height:150,
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
        }
})