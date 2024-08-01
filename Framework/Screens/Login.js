import { View } from "react-native";

export function Login(){

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
                onPress={navigation.navigate("Home")}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>Do not have account 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={navigation.navigate("SignUp")}
                    >
                    <Text>create account</Text>
                </TouchableOpacity> 
            </Text>
            </View>
    )
    }


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    },
    inputField:{
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
       