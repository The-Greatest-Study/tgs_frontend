import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="아이디"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="비밀번호"
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    color: 'black',
  },
});

export default SignInScreen;
