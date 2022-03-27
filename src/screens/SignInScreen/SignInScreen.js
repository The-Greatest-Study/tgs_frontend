import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import TestLogo from '../../../assets/images/test.jpg';

const SignInScreen = () => {
  const [userid, setUserid] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
     console.warn("Sign in");

     navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    console.warn("Sign up");
  };

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
    
    <ImageBackground
        source={TestLogo}
        resizeMode="cover"
        style={styles.bgImg}>
        <View>
          <Text style={styles.redTitle}>오늘, 뭐먹지?</Text>
            <ScrollView>
              <View style={styles.safeAreaStyle}>
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
                
                <CustomButton text="로그인" onPress={onSignInPressed} />

                <CustomButton text="회원가입" onPress={onSignUpPressed} type="PRIMARY"/>
              </View>
              </ScrollView>
          <Text style={styles.blueNotice}></Text>
        </View>
      </ImageBackground>
      
    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#48CAE1',
  },
  view: {
    alignItems: 'center',
    padding: 20,
    color: 'black',
  },
  safeAreaStyle: {
    backgroundColor: '#B2CCFF',
    margin: 50,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    color: 'black',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
  redTitle: {
    alignSelf: 'center',
    backgroundColor: '#B2CCFF',
    color: '#F15F5F',
    fontSize: 40,
    fontFamily: 'Maplestory-Bold',
    padding: 20,
    marginBottom: 100,
    borderRadius: 20,
  },
});

export default SignInScreen;
