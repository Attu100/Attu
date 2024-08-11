import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export function TipsStore (){
    return (
        <View style={{flex:1,position:"relative",backgroundColor:"purple", justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{position:"absolute",top:-3,right:-3,width:30,height:30, justifyContent:"center",alignItems:"center"}}><Text style={{width:30,height:30,fontSize:20,textAlign:"center",color:"white"}}>x</Text></TouchableOpacity>
            <Text style={{fontSize:30, color:"#ff00d4"}}>Tips store</Text>
        <View style ={styles.tips}>
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>over/under</Text>
                </TouchableOpacity>
        
        
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>H/F</Text>
                </TouchableOpacity>
                
            
        
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>expert Acca</Text>
                </TouchableOpacity>
                
            
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>handicap</Text>
                </TouchableOpacity>
                
    
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>sure 3 odd</Text>
                </TouchableOpacity>
                
            
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>sure 2 odd</Text>
                </TouchableOpacity>
                
        
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>correct score</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>10 min draw</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{backgroundColor:"gold",padding:5,borderRadius:10,width:100,height:30}}>
                    <Text style={{color:"white",alignSelf:"center",textAlign:"center"}} numberOfLines={1}>both to score</Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles =StyleSheet.create({
    tips:{
        height:"50%",
        borderRadius:10,
        backgroundColor:"#f8f6f6",
        justifyContent:"space-between",
        padding:5,
        flexDirection:"row",
        flexWrap:"wrap"
    }   
})