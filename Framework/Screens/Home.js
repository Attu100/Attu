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
            <View>
                <View>
                    <View>
                        <Image />
                    </View>
                    <View>
                        <Text>Hi {userinformstion.firstName}</Text>
                    </View>
                </View>
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
    header:{
width:40,
borderEndStartRadius:5,
borderWidth:2,
borderColor:"yellow",
flex:1,
flexDirection:"column"
    }
})