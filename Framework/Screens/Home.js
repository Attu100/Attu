import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SignUpScreen } from "./SignUp";



const Array =[{
    date:"1/08/2024",
    country:"NGR",
    club:"porto",
    Tip_1:"0 2.5",
    tip_2:"over 1.5",
    score:"2:1",
    sureGame:"H"
}]
export function Home(){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.companyName}>Attu</View>
                <View style={styles.companyLogo}> 
                    <Image source={require("../../assets/icon.png")} style={{width:40,height:40,borderRadius:20,}}/>
                </View> 
                <View style={styles.menuButton}>
                    <TouchableOpacity style={{backgroundColor:"purple",padding:8,borderRadius:4}}><Text style={{color:"gold"}}>Menu</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.intro}>
                <View style={{flex:1, borderRadius:10,margin:4,backgroundColor:"white"}}>
                    <View style={{justifyContent:"center",borderRadius:8,margin:0.5,alignItems:"center"}}>
                        <View style={styles.imageContainer}>
                        <Image source={require("../../assets/adaptive-icon.png")} style={{width:49,height:49}}/>
                        </View>
                    </View>
                
                
                <View style={styles.balanceField} >
                    <View>
                    <Text>hi Name</Text>
                    </View>
                    <View>
                    <Text>Balance:0</Text>
                    </View>
                </View>
                </View>
                 
                
                <View style={styles.cauroselField}>

                </View>
                <View style={styles.logOutField}>
                    <TouchableOpacity style={{backgroundColor:"purple",padding:8,borderRadius:4}}>
                        <Text style={{color:"gold"}}>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.prediction}>
                <View style={styles.overView}>
                    <Text style={{fontSize:20, color:"purple"}}>
                        Free and sure prediction of the today 
                    </Text>
                    <Text >day</Text>
                </View>
                <View>
                    <View style={styles.predictionDetail}>
                        <Text style={styles.freePrediction}>date</Text>
                        <Text style={styles.freePrediction}>country</Text>
                        <Text style={styles.freePrediction}>club</Text>
                        <Text style={styles.freePrediction}>1st tips</Text>
                        <Text style={styles.freePrediction}>2nd tips</Text>
                        <Text style={styles.freePrediction}>Score</Text>
                        <Text style={styles.freePrediction}>100%</Text>
                     </View>
                     <ScrollView style={{backgroundColor:"#faebfaf5", height:100}}>
                             {/* <FlatList 
                                data={Array}
                                renderItem={({value})=> <Text>{value.club}</Text>}
                            />  */}
                     </ScrollView>

                        
                     <View style={styles.simpleBookingCode}>
                        <View  style={{backgroundColor:"#faebfaf5",height:40, margin:5,borderRadius:10, alignItems:"center"}}>
                        <Text style={{color:"purple"}}>Simple sportybet booking code</Text>
                        <Text style={styles.sportybetCode}>1467857</Text>
                        </View>
                       <View style={styles.singleBet}>
                            <Text>single bet of today</Text>
                            <Text>man united</Text> 
                            <Text> vs </Text>
                            <Text>liverpool</Text>
                            <Text>over 3.50</Text>
                        </View> 
                     </View>
                     <View style={styles.recentWinings}>
                        <Text style={styles.freePrediction}>date</Text>
                        <Text style={styles.freePrediction}>country</Text>
                        <Text style={styles.freePrediction}>club</Text>
                        <Text style={styles.freePrediction}>outcome</Text>
                     </View>
                     <ScrollView style={{backgroundColor:"#faebfaf5", height:100}}>
                             {/* <FlatList 
                                data={Array}
                                renderItem={({value})=> <Text>{value.club}</Text>}
                            />  */}
                     </ScrollView>
                </View>
            </View>
            
            <View style={styles.moreDetailField}>
                    
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>About Us</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>Help</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>FAQ</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>Tip Store</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>leagues</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>Our plans </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>experts Acca</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>sport news</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>disclaimer </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>refund policy</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>channel</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>terms & condition</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center"}}>payment method</Text></TouchableOpacity>
            </View>
        </ScrollView>
)
}

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        borderWidth:2,
        margin:5,
        backgroundColor:"hsla(289, 92%, 85%, 0.961)",
    },
    header:{
        backgroundColor:"#faebfaf5",
        borderEndStartRadius:5,
        borderRadius:10,
        justifyContent:"space-around",
        borderColor:"#yellow",
        flexDirection:"row",
       
        margin:5,
        height:70
            },
            companyName:{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                fontSize:40,
                color:"gold"
            },
            companyLogo:{
                flex:1,
                margin:5,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"gold"
            },
            menuButton:{
                flex:1,
                flexDirection:"row-reverse",
                paddingRight:5,
                alignItems:"center",
                color:"gold"
            },
    imageContainer:{
        width:70,
        height:70,
        borderRadius:35,
        borderColor:"gold",
        backgroundColor:"white",
        justifyContent:"center",
        alignContent:"center",
        padding:1,
        borderWidth:2
  },   intro:{
    height:150,
    borderRadius:15,
    backgroundColor:"#faebfaf5",
    margin:5,
    flexDirection:"row",
    justifyContent:"space-around"
},
   balanceField:{
        margin:3,
        flex:1,
        justifyContent:"space-evenly"
    },
    cauroselField:{
        width:270,
        borderRadius:10,
        margin:5,
        backgroundColor:"white"
    },
    logOutField:{
        justifyContent:"center",
        alignItems:"center",
        width:70,
        marginVertical:5
    },
     prediction:{
         margin:5
   },
    overView:{
        backgroundColor:"#faebfaf5",
        height:80,
        margin:5,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
 predictionDetail:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderRadius:10,
        margin:5,
        backgroundColor:"#faebfaf5",
    },
    freePrediction:{
        borderRadius:8,
        padding:5,
        margin:3,
        backgroundColor:"#e217d8",
        color:"gold"
    },
    simpleBookingCode:{
        height:200,
        borderRadius:10,
        margin:5,
    },
    sportybetCode:{
        backgroundColor:"#e628cc",
        color:"white",
        padding:5,
        borderRadius:8
    },
    singleBet:{
        height:70,
        padding:4,
        flex:1,
        margin:5,
        backgroundColor:"#faebfaf5",
        borderRadius:10
    },
    recentWinings:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    moreDetailField:{
        padding:1,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    moreDetailContainer:{
        padding:1,
        width:100,
        margin:2,
        borderRadius:10,
        backgroundColor:"gold",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        
    }
})