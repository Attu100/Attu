import { Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { SignUpScreen } from "./SignUp";

export function Home(){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>Attu</View>
                <View style={styles.companyLogo}> 
                    <Image source={require(".../assets/icon.png")} style={{width:30,height:40}}/>
                </View> 
                <View>menu</View>
            </View>
            <View style={styles.intro}>
                <View style={styles.imageContainer}>
                    <Image source={require(".../assets/adaptivve-icon.png")} style={styles.imageContainer}/>
                </View>
                <View>
                    <Text>hi Name</Text>
                    <Text>Balance:0</Text>
                </View>
                <View style={styles.cauroselField}>

                </View>
                <View style={styles.logOutField}>
                    <TouchableOpacity>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.prediction}>
                <View style={styles.overView}>
                    <Text>
                        Free and sure prediction of the today 
                    </Text>
                    <Text>day</Text>
                </View>
                <ScrollView>
                    <View style={styles.predictionDetail}>
                        <Text>date</Text>
                        <Text>country</Text>
                        <Text>club Name</Text>
                        <Text>1st tips</Text>
                        <Text>2nd tips</Text>
                        <Text>Score</Text>
                        <Text>100%</Text>
                     </View>
                     <View style={styles.simpleBookingCode}>
                        <Text>Simple sportybet booking code</Text>
                        <Text style={styles.sportybetCode}>1467857</Text>
                        <Text>single bet of today</Text>
                        <Text style={styles.singleBet}>man united vs liverpool<Text>over 3.50</Text></Text>
                     </View>
                     <View style={styles.recentWinings}>
                        <Text>date</Text>
                        <Text>country</Text>
                        <Text>club Name</Text>
                        <Text>outcome</Text>
                     </View>
                </ScrollView>
            </View>
            <View style={styles.moreDetailField}>
                    
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>About Us</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>Help</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>FAQ</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>Tip Store</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>leagues</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>Our plans </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>experts Acca</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>sport news</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>terms & condition</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>disclaimer </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>refund policy</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>channel</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text>payments method</Text></TouchableOpacity>
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
    },
    prediction:{
        height:150,
    },
    overView:{
        height:80
    },
    predictionDetail:{
        width:"100%",
        flexDirection:"column",
    },
    simpleBookingCode:{
        height:70
    },
    sportybetCode:{
        height:30
    },
    singleBet:{
        height:30,
        width:40,
        padding:4
    },
    recentWinings:{
        flexDirection:"column"
    },
    moreDetailField:{
        height:150,
    },
    moreDetailContainer:{
        padding:4,
        marging:4,
        width:50,
        height:30,
        backgroundColor:"gold",
        color:"white"
    }
})