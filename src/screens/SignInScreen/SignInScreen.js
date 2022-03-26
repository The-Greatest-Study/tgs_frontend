import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
      console.warn("Sign in");
  }

  const fetchUsers = async () => {
    try {
      //console.warn("Sign In Start");
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      //console.warn("Sign In End");
      setLoading(true);
      
      const response = await axios.post(
        'https://the-greatest-study.herokuapp.com/user/create',
        {
            userId: username,
            userNm: 'test',
            pw: password,
            userBday:'2022-03-26',
            gender:'M'
        }
      );
      

      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      //console.warn(users);
    } catch (e) {
      setError(e);
      console.warn(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
      
      <CustomButton text="로그인" onPress={fetchUsers}/>
    </View>

    //<button onClick={fetchUsers}><Text>login</Text></button>
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
