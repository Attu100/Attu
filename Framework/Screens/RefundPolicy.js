import { Text, TouchableOpacity, View } from "react-native";

export function RefundPolicy ({navigation}){
    return (
        <View style={{justifyContent:"center",alignItems:"center",borderRadius:20,margin:10, flex:1,backgroundColor:'purple'}}>

        <View style={{width:300,alignSelf:"center",justifyContent:"center",borderRadius:20,backgroundColor:"#ece9e9",padding:5}}>
            <Text style={{alignSelf:"center",fontSize:30,color:"#ff00d4"}}>Refund policy</Text>
            <Text style={{color:'#ff00d4'}}>Hi! Attu</Text>
            <Text>
                this is to let you know that before
                making any payments try to go through it
                as payments are non refundable. 
                thanks.
            </Text>
            <View style={{alignSelf:"center",marginTop:20}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("SignUpScreen")}} style={{backgroundColor:"gold",padding:5,borderRadius:10}}><Text style={{color:"white"}}>ok</Text></TouchableOpacity>
            </View>
        </View>
        </View>
    )
}