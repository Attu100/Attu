import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Them } from "../Components/Theme";
import { useContext } from "react";
import { AppContext } from "../Components/GlobalVariable";

const DATA = [{
    date:"5/08",
    country:"niger",
    club: "m united VS chelsea",
    tips1:"over 2.50",
    tips2:"",
    score:"",
    percent:""
    
},
{
    date:"5/08/2024",
    country:"niger",
    club: "manchester VS chelsea",
    tips1:"over 2.50",
    tips2:"",
    score:"",
    percent:""
    
}]

export function Home({navigation}){
    const {userInformation}=useContext(AppContext)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.companyName}>Attu</View>
                <View style={styles.companyLogo}> 
                    <Image source={require("../../assets/Screenshot_20230912-222618.jpg")} style={{width:40,height:40,borderRadius:20,}}/>
                </View> 
                <View style={styles.menuButton}>
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")} style={{backgroundColor:Them.colors.secondary1,padding:8,borderRadius:4}}><Text style={{color:Them.colors.primary,fontWeight:"700"}}>Menu</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.intro}>
                <View style={{flex:1, borderRadius:10,margin:4,backgroundColor:"white"}}>
                    <View style={{justifyContent:"center",borderRadius:8,margin:0.5,alignItems:"center"}}>
                        <View style={styles.imageContainer}>
                        <Image source={require("../../assets/profile.jpg")} style={{width:69,height:69,borderRadius:35}}/>
                        </View>
                    </View>
                
                
                <View style={styles.balanceField} >
                    <View>
                    <Text>Hi! {userInformation.firstName}</Text>
                    </View>
                    <View>
                    <Text>Balance : {userInformation.balance}</Text>
                    </View>
                </View>
                </View>
                 
                
                <View style={styles.cauroselField}>

                </View>
                <View style={styles.logOutField}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{backgroundColor:Them.colors.secondary1,padding:8,borderRadius:4}}>
                        <Text style={{color:Them.colors.primary,fontWeight:"700"}}>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.prediction}>
                
                <View>
                    
                    <View style={{backgroundColor:Them.colors.textColor}}>
                    <View style={styles.overView}>
                    <Text style={{fontSize:20, color:Them.colors.primary}}>
                        Free and sure prediction of the today 
                    </Text>
                    <Text >day</Text>
                </View>
                        
                        <View style={styles.predictionDetail}>
                            <Text style={styles.freePrediction}>Date</Text>
                            <Text style={styles.freePrediction}>Country</Text>
                            <Text style={[styles.freePrediction,{flex:2}]}>Club</Text>
                            <Text style={styles.freePrediction}>1st tips</Text>
                            <Text style={styles.freePrediction}>2nd tips</Text>
                            <Text style={styles.freePrediction}>Score</Text>
                            <Text style={styles.freePrediction}>100%</Text>
                        </View>
                        <ScrollView style={{backgroundColor:Them.colors.textColor, height:100,borderRadius:10}}>
                            <FlatList 
                                data={DATA}
                                renderItem={({item})=>{ 
                                return(
                                    <View style={styles.predictionDetail}>
                                        <Text style={styles.freePrediction}>{item.date}</Text>
                                        <Text style={styles.freePrediction}>{item.country}</Text>
                                        <Text style={[styles.freePrediction,{flex:2}]}>{item.club}</Text>
                                        <Text style={styles.freePrediction}>{item.tips1}</Text>
                                        <Text style={styles.freePrediction}>{item.tips2}</Text>
                                        <Text style={styles.freePrediction}>{item.score}</Text>
                                        <Text style={styles.freePrediction}>{item.percent}</Text>
                                    </View>
                                )
                                    }}
                            />  
                        </ScrollView>
                    </View>
                    

                        
                     <View style={styles.simpleBookingCode}>
                        <View  style={{backgroundColor:Them.colors.textColor,height:40, margin:5,borderRadius:10, alignItems:"center"}}>
                        <Text style={{color:Them.colors.primary,fontWeight:"700"}}>Simple sportybet booking code</Text>
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
                     <View style={{backgroundColor:Them.colors.textColor}}>
                     <View style={styles.recentWinings}>
                        <Text style={styles.freePrediction}>date</Text>
                        <Text style={styles.freePrediction}>country</Text>
                        <Text style={styles.freePrediction}>club</Text>
                        <Text style={styles.freePrediction}>outcome</Text>
                     </View>
                     <ScrollView style={{backgroundColor:Them.colors.textColor, height:100,borderRadius:10}}>
                             {/* <FlatList 
                                data={Array}
                                renderItem={({value})=> <Text>{value.club}</Text>}
                                
                            />  */}
                     </ScrollView>
                     </View>
                    
                </View>
            </View>
            
            <View style={styles.moreDetailField}>
                    
                    <TouchableOpacity  style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>About Us</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>Help</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>FAQ</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>Tip Store</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>leagues</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>Our plans </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>experts Acca</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>sport news</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>disclaimer </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>refund policy</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>channel</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>terms & condition</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.moreDetailContainer}><Text style={{textAlign:"center",color:Them.colors.primary}}>payment method</Text></TouchableOpacity>
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
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding:1,
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
        height:50,
        margin:5,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
 predictionDetail:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        borderWidth:1,
        backgroundColor:Them.colors.textColor
    },
FlatListStyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:5,
        backgroundColor:Them.colors.textColor
    },
    freePrediction:{
        justifyContent:"center",
        textAlign:"center",
        borderRadius:8,
        padding:5,
        margin:3,
        fontWeight:"700",
        color:"gold",
        flex:1,
        borderWidth:1
        
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
        backgroundColor:Them.colors.textColor,
        borderRadius:10
    },
    recentWinings:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderRadius:10,
        margin:5,
        backgroundColor:Them.colors.textColor
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
        backgroundColor:Them.colors.secondary1,
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        
    }
})