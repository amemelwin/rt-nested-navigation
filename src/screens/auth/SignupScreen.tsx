import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ScreenProps } from "../../navigations/auth-stack-navigation";
export type ObjProp = {
    id:any;
    userName:string;
    email: string;
    password: string;
    role:string;
    checked:string;
}
const SignupScreen = ({navigation,route,setIsAdmin,setIsLogin}:ScreenProps)=>{
    const [userName,setIsUserName] = useState<string>('');
    const [email,setIsEmail] = useState<string>('');
    const [password,setIsPassword] = useState<string>('');
    // const [role,setIsRole] = useState<string>('');
    const [errMsg,setErrMsg] = useState<string>('');
    const [checked, setChecked] =useState<string>('admin');

    const SizeBox = ({width,height}:{width?:number,height?:number})=>{
        return <View style={{width,height}}></View>
    }    
    const signupAction = async()=>{
       //AsyncStorage.removeItem('usersList');
        if(email === '' || password === '' || userName === '' ){
            setErrMsg("Input field is required");
          }else{
            try{
                const person = {
                    id:Math.random(),
                    userName,
                    email,
                    password
                };
                let adminList=await AsyncStorage.getItem('person-list');
                if(adminList === null){
                    AsyncStorage.setItem('person-list',JSON.stringify([person]))
                    console.log([person]);
                }else{
                    const personArr:Array<ObjProp> = JSON.parse(adminList);
                    const duplicatePersons = personArr.filter((person)=>person.email === email)
                    if(duplicatePersons.length === 0){
                        const updatedPersons= [...personArr,person];
                        console.log(updatedPersons);
                        AsyncStorage.setItem('person-list',JSON.stringify(updatedPersons));
                        navigation.navigate('Login')
                    }else{
                        setErrMsg("Email is already exist");
                    }
                    
                }
            }catch(e){

            }
          }
    }
    return (<View style={styles.container}>
        <SizeBox height={40}/>
        <Text>User Name</Text>
        <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20, padding:5, borderRadius:15 }}
            value={userName}
            onChangeText={(text) => setIsUserName(text)}
            autoCapitalize={'none'}
        />
        <Text>Email</Text>
        <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20, padding:5, borderRadius:15 }}
            value={email}
            onChangeText={(text) => setIsEmail(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
        />
        <Text>Password</Text>
        <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20,padding:5, borderRadius:15 }}
            value={password}
            onChangeText={(text) => {setIsPassword(text)}}
            secureTextEntry
        />
         {/* <Text>Role</Text>
        <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20, padding:5, borderRadius:15 }}
            value={role}
            onChangeText={(text) => setIsRole(text)}
            autoCapitalize={'none'}
        />
        <Text>Admin</Text>
        <RadioButton
            value="admin"
            status={ checked === 'admin' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('admin')}
        />
        <Text>User</Text>
        <RadioButton
            value="user"
            status={ checked === 'user' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('user')}
        /> */}
        {errMsg && <Text style={{color:'red'}}>{errMsg}</Text>}
        <View style={{borderRadius:15, alignSelf:'center', width:"25%"}}>
            <Button
                onPress={signupAction}
                title="Sign up"
                
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} activeOpacity={0.8} >
            <Text style={{color:'#3405B9'}}>already have account to login??</Text>
        </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
        padding:20,
        justifyContent : 'center',
        // alignItems:'center'
    },
    loginBtn:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    signupBtn:{
        marginTop:40
    }
})
export default SignupScreen;