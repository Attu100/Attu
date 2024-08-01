import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SignUpScreen } from "./SignUp";

export function Home(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>Attu</View>
                <View> Logo</View>
                <View>menu</View>
            </View>
            <View style={styles.intro}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image style={{width:49,height:49,borderEndStartRadius:24.5}} />
                    </View>
                    <View style={styles.balanceField}>
                        <Text>Hi Attu</Text>
                        <Text>Balance:0</Text>
                    </View>
                </View>
                <View
                style={styles.cauroselField}>

                </View>
                <View style={styles.logOutField}>

                </View>
            </View>
            <View>
                <View></View>
                <View></View>
            </View>
            <View>

            </View>
            <View>

            </View>
            <View>

            </View>
            <View>

            </View>


        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight
    },
    imageContainer:{
        width:50,
        height:50,
        borderRadius:20,
        borderWidth:4,
        borderColor:"yellow"
    },
    header:{
width:40,
borderEndStartRadius:5,
borderWidth:2,
borderColor:"#yellow",
flex:1,
flexDirection:"column"
    },
    intro:{
        height:70,
        width:70,
    },
   balanceField:{
        width:30,
        height:30,
    },
    cauroselField:{
        flex:1
    },
    logOutField:{
        width:30
    }
})