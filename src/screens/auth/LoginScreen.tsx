import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomInputComponent from '../../components/common/CustomInputComponent';
import { ScreenProps } from "../../navigations/auth-stack-navigation";
import { ObjProp } from './SignupScreen';

const LoginScreen = ({navigation,route,setIsAdmin,setIsLogin}:ScreenProps)=>{

    const [email,setIsEmail] = useState<string>('');
    const [password,setIsPassword] = useState<string>('');
    // const [role,setIsRole] = useState<string>('');
    const [errMsg,setErrMsg] = useState<string>('');
    const [onFinish,setOnFinish] = useState<boolean>(false);
    const [isRememberPwd,setIsRememberPwd] = useState<boolean>(false);
    var results:any;
    const loginAction = async()=>{
        try {
            const personList = await AsyncStorage.getItem('person-list');
            alert(personList)
            // We have data!!
             results =   personList != null ? JSON.parse(personList).filter((obj:ObjProp) => {
                return obj.email === email;
              }):null;
        } catch (error) {
            // Error retrieving data
        }
        const  person= results[0];
        const setLoginUser = ()=>{
            AsyncStorage.setItem("login-user",JSON.stringify({email,password:isRememberPwd?password:''}));
        }
        if(email === '' || password === ''){
            setErrMsg("Input field is required");
        }else if(email==="admin@gmail.com" && password === person.password ){
            setLoginUser();
            alert("This is admin")
            setIsLogin(true);
            setIsAdmin(true);
            setErrMsg('');
        }else if(password === person.password) {
            setLoginUser();
            alert("This is user")
            setIsLogin(true);
            setIsAdmin(false);
            setErrMsg('');
        }else{
            setErrMsg("Authenatication failed.");
        }
    }
    const SizeBox = ({width,height}:{width?:number,height?:number})=>{
        return <View style={{width,height}}></View>
    }
    useEffect(()=>{
        AsyncStorage.getItem("login-user").then((user)=>{
            if(user && !onFinish){
                const {email,password} = JSON.parse(user);
                setIsEmail(email);
                setIsPassword(password);
                setOnFinish(true);
                if(password){
                    setIsRememberPwd(true);
                }
            }
        });
    })
    return (<View style={styles.container}>
        <SizeBox height={40}/>
        <CustomInputComponent 
            title='Email' 
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20,padding:5, borderRadius:15 }}
            value={email}
            onChangeText={(text) => {setIsEmail(text)}}
            autoCapitalize={'none'}
            isPasswordField={false}
            keyboardType='default'
        />
        <CustomInputComponent 
            title='Password' 
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20,padding:5, borderRadius:15 }}
            value={password}
            onChangeText={(text) => {setIsPassword(text)}}
            isPasswordField
            keyboardType='default'
        />
        <TouchableOpacity 
            onPress={()=>setIsRememberPwd(!isRememberPwd)}
            style={styles.rememberPwd}>
            <Ionicons
                name={isRememberPwd? 'checkbox':'square-outline'}
                size={25}
            />
            <Text style={{marginLeft:10}}>Remember Password</Text>
        </TouchableOpacity>
       
         {/* <Text>Role</Text>
        <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1, marginTop:10, marginBottom: 20, padding:5, borderRadius:15 }}
            value={role}
            onChangeText={(text) => setIsRole(text)}
            autoCapitalize={'none'}
        />
         <Text>Admin</Text>
        <RadioButton
            value={checked}
            status={ checked === 'admin' ? 'checked' : 'unchecked' }
            onPress={() => setChecked(checked)}
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
                onPress={loginAction}
                title="Log in"
                
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} activeOpacity={0.8} style={styles.loginBtn}>
            <Text style={{color:'#3405B9'}}>If you want to register. Register?</Text>
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
    },
    rememberPwd:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default LoginScreen;