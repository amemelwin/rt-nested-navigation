import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Nav = {
    navigate: (value: string) => void;
  }
   
const Home = () => {
    // const { navigate } = useNavigation<Nav>();
    const navigation = useNavigation<Nav>();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text onPress={()=>navigation.navigate('Detail')}
        >
        Go to Detail Screen
      </Text>
    </View>
  )
}

export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });