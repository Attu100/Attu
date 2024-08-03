import { StyleSheet } from "react-native"

export function EditeProfile(){
    return (
        <View>
             <View style={styles.ProfileImage}>
                <Text>profile</Text>
            </View>
            <View>
            <TextInput value="firstName"style={styles.profileDetailField}/>  
            <TextInput value="lastName" style={styles.profileDetailField}/>  
            <TextInput value="email" style={styles.profileDetailField}/>   
            <TextInput value="phone" style={styles.profileDetailField}/>  
            <TextInput value="gender" style={styles.profileDetailField}/>
            <TextInput value="date of birth" style={styles.profileDetailField}/>   
            <TextInput value="nationality" style={styles.profileDetailField}/>   
            <TextInput value="state" style={styles.profileDetailField}/>   
            <TextInput value="LGA" style={styles.profileDetailField}/>
            </View>
            <TouchableOpacity styl={styles.editeProfileButton} onPress={{}}>
                <Text>submit</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ProfileImage:{
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:2,
        backgroundColor:"yellow"
    },
    profileDetailField:{
        width:100,
    },
    editeProfileButton:{
        padding:4,
        width:70,
        backgroundColor:"gold"

    }
    
}
)