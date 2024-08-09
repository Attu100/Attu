import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
export function Profile (){
    return (
        <View>
            <View style={styles.ProfileImage}>
                <Text>profile</Text>
                <TouchableOpacity styl={styles.editeProfileButton} onPress={{}}>
                <Text>edite profile</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <Text  style={styles.profileDetailField} >firstName</Text>
            <TextInput value={firstName} style={styles.profileDetailField}/>  
            <TextInput value="lastName" style={styles.profileDetailField}/>  
            <TextInput value="email" style={styles.profileDetailField}/>   
            <TextInput value="phone" style={styles.profileDetailField}/>  
            <TextInput value="gender" style={styles.profileDetailField}/>
            <TextInput value="date of birth" style={styles.profileDetailField}/>   
            <TextInput value="nationality" style={styles.profileDetailField}/>   
            <TextInput value="state" style={styles.profileDetailField}/>   
            <TextInput value="LGA" style={styles.profileDetailField}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    ProfileImage:{
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:2,
        backgroundColor:"yellow",
        position:"relative"
    },
    profileDetailField:{
            width:"70%",
            borderRadius:10,
            borderWidth:4,
            color:"#8605807a",
            padding:5,
            margin:3
    },
    editeProfileButton:{
        padding:4,
        width:70,
        backgroundColor:"gold",
        position:"absolute",
        right:-10,
        bottom:-10
    }
})