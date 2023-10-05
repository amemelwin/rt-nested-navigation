import { Button, StyleSheet, Text, View } from 'react-native';
import { HomeTabScreenProps } from '../../Navigation/admin-tab-navigation/home-stack-navigation';
const HomeScreen = ({navigation,setIsAdmin,setIsLogin}:HomeTabScreenProps)=>{
    const cagetoryLists = [
        {
            label:'Frontend',
            img:''
        },
        {
            label:'Backend',
            img:''
        },
    ]
    const logoutAction = ()=>{
        setIsAdmin(false);
        setIsLogin(false);
    }
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:24}}>Category</Text>
            <View style={styles.categoryLayout}>
            {
                cagetoryLists.map(({label})=>{
                    return <View key={Math.random()} style={{alignItems:'center'}}>
                        <View style={styles.rectangle}></View>
                        <Text>{label}</Text>
                    </View>
                })
            }
            </View>
            <Button
                onPress={logoutAction}
                title='Log out'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding:10,
    },
    categoryLayout :{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'100%',
        marginTop:40,
        marginBottom: 40
    },
    rectangle: {
        height: 128,
        width: 128,
        backgroundColor: 'salmon',
      },
})
export default HomeScreen;