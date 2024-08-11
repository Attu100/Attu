import { Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Components/Button";
import { useState } from "react";

export function OurPlans(){
    const [modalVisibile,setModalVisible]=useState(false)
    const closemodal = ()=>{
        setModalVisible(!modalVisibile)
    }
    return (
        <ScrollView style={styles. container}>
            <Text style={{alignSelf:"center",color:"white",fontWeight:"bold",fontSize:20}}>Subscribe for your future wining</Text>
            <View style={styles.planCotainer}>
                <Text style={styles.planHeader}>Super</Text>
                <Text style={styles.planDiscription}> Super plan is the plan which give you:</Text>
                <Text>{'\u2B24'} 70 % wining. </Text>
                <Text>{'\u2B24'} Access to single bet.</Text> 
                <Text>{'\u2B24'} Access to handicap.</Text>
                <Text>{'\u2B24'} Access to double chance.</Text>
                <Text>{'\u2B24'} Access to over 1.5 odds.</Text>
                <View style={styles.durationAmountsContainer}>
                    <Text style={styles.duration}>Duration</Text> 
                    <Text style={styles.amounts}>$ 1</Text>
                </View>
                <View style={{alignSelf:"center",marginTop:20}}>
                    <TouchableOpacity onPress={()=>setModalVisible(true)} style={{backgroundColor:"gold",padding:5,borderRadius:10}}><Text>pay now</Text></TouchableOpacity>
                </View>
            </View>
        <View style={styles.planCotainer}>
            <Text style={styles.planHeader}>Super +</Text>
            <Text style={styles.planDiscription}> Super plan is the plan which give you:</Text>
                <Text>{'\u2B24'} 85 % wining. </Text>
                <Text>{'\u2B24'} Access to single bet.</Text> 
                <Text>{'\u2B24'} Access to handicap.</Text>
                <Text>{'\u2B24'} Access to double chance.</Text>
                <Text>{'\u2B24'} Access to over 1.5 odds.</Text>
                <Text>{'\u2B24'} sure 2 odds.</Text>
                <Text>{'\u2B24'} sure 3 odds.</Text>
            <View style={styles.durationAmountsContainer}>
                <Text style={styles.duration}>Duration</Text> 
                <Text style={styles.amounts}>$ 2</Text>
            </View>
            <View style={{alignSelf:"center",marginTop:20}}>
                <TouchableOpacity onPress={()=>setModalVisible(true)} style={{backgroundColor:"gold",padding:5,borderRadius:10}}><Text>pay now</Text></TouchableOpacity>
            </View>
        </View>
        <View style={styles.planCotainer}>
            <Text style={styles.planHeader}>Super ++</Text>
            <Text style={styles.planDiscription}> Super plan is the plan which give you:</Text>
            <Text>{'\u2B24'} 85 % wining. </Text>
            <Text>{'\u2B24'} Access to single bet.</Text> 
            <Text>{'\u2B24'} Access to handicap.</Text>
            <Text>{'\u2B24'} Access to double chance.</Text>
            <Text>{'\u2B24'} Access to over 1.5 odds.</Text>
            <Text>{'\u2B24'} sure 2 odds.</Text>
            <Text>{'\u2B24'} sure 3 odds.</Text>
            <Text>{'\u2B24'} 10 sure odds.</Text>
            <Text>{'\u2B24'} 100 odds, and much more.</Text>
            <View style={styles.durationAmountsContainer}>
                <Text style={styles.duration}>Duration</Text> 
                <Text style={styles.amounts}>$ 3</Text>
            </View>
            <View style={{alignSelf:"center",marginTop:20}}>
                <TouchableOpacity onPress={()=>setModalVisible(true)} style={{backgroundColor:"gold",padding:5,borderRadius:10}}><Text>pay now</Text></TouchableOpacity>
            </View>
        </View>
        <Modal 
            visible={modalVisibile} 
            animationType="slide"
            transparent={true}
            style={{flex:1,padding:5}}
        >
            <Pressable  style={{flex:1,}}>
            </Pressable>
            <View transparent={true} style={{flex:1,justifyContent:"center",flex:1}}>

                <View style={{position:"relative",backgroundColor:"purple", height:"50%",flex:1,pading:5,alignItems:"center",borderRadius:20,margin:5}}>
                    <TouchableOpacity style={{position:"absolute",top:3,right:10,width:30,height:30, justifyContent:"center",alignItems:"center"}} onPress={closemodal}><Text style={{borderRadius:20,width:30,height:30,fontSize:20,textAlign:"center",backgroundColor:"#414141",color:"white"}}>x</Text></TouchableOpacity>
                    <Text style={{margin:5}}>payment method</Text>
                    <Text>This payment method is fast and secure</Text>
                    {Button("Paystack")} 
                </View>
            </View>
            <Pressable style={{flex:1}}></Pressable>
        </Modal>
    </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:"#f7c9f7",
        borderWidth:1,
        borderRadius:10,
        margin:5
    },
    planCotainer:{
        borderRadius:10,
        margin:3,
        padding:5,
        backgroundColor:"#ebe8e8"
    },
    planHeader:{
        alignSelf:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"#ff00d4"
    },
    planDiscription:{
        fontSize:20,
        color:"#ff00d4",
        fontStyle:"italic",
        borderRadius:10,
    },
    duration:{
        fontWeight:"500",
        color:"#ff00d4"
    },
    amounts:{
        color:"red",
        fontStyle:"italic",
        fontWeight:"bold",
        textAlign:"center",
        width:100,
        padding:5,margin:5
    },
    durationAmountsContainer:{
        width:300,
        alignItems:"center"
    }
})