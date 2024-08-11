import { useState } from "react";
import { View } from "react-native";
import { createContext } from "react";


export const AppContext = createContext();

export function AppProvider ({children}){

const [userInformation,setUserInformation]= useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    balance:0,
    gender:"",
    nationality:"",
    state:"",
    LGA:"",
    })
const [userID,setUserID]=useState("");
const [preloader,setPreloader] = useState(false)
return (
    <AppContext.Provider value={
       {
         userInformation,setUserInformation,
        userID,setUserID,
        preloader,setPreloader,
       }
    }>
        {children}
    </AppContext.Provider>
        
    
)
}