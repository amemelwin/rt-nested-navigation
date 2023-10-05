import { StyleSheet, Text, View } from "react-native";
const InfoScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Info</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        fontWeight:'bold'
    }
})
export default InfoScreen;