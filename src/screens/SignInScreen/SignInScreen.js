import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import TestLogo from '../../../assets/images/test.jpg';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image 
                source={TestLogo} 
                style={[styles.testLogo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />

            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    testLogo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen