import React, {useState} from 'react';
import {Alert, Dimensions, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {config} from '../../../config';
import TabBar from '../components/TabBar';
import {login} from '../../store/actions/authenticationAction';
import {RootState} from '../../store';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const FormWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center
  width: 100%;
  justifycontent: center;
  alignitems: center;
  height: 80%;
`;

const Form = styled.View`
  height: 400px;
  width: 90%;
  background-color: black;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
`;

const SubmitForm = styled.TouchableOpacity`
    width: 95%;
    height: 50px;
    color: white;
    border-radius: 10px;
    border: none;
    justify-content: center;
    align-items: center
    margin-top: 20px;
    background-color: #2e66e4;
`;

const Input = styled.TextInput`
  width: 95%;
  height: 50px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: #333333;
  color: white;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  color: white;
`;
const SignInText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 10px;
  text-align: left;
`;

const NewToMovieAppTextWrapper = styled.TouchableOpacity`
  width: 100%;
`;

const NewToMovieApp = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #ccc;
  margin: 15px;
  text-align: center;
`;

const Overlay = styled.View`
  flex: 1;
  justifycontent: center;
  alignitems: center;
  background-color: 'rgba(0,0,0,0.5)';
`;

const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const handleOnPress = () => {
    dispatch(login());
  };

  return !authState.isAuthenticated ? (
    <>
      <Container>
        <ImageBackground
          source={{
            uri: config.OVERLAY_IMAGE,
          }}
          resizeMode="cover"
          style={{flex: 1, height: Dimensions.get('window').height}}>
          <Overlay>
            <FormWrapper>
              <Form>
                <SignInText>Sign In</SignInText>
                <Input
                  placeholder="Enter your email"
                  placeholderTextColor="grey"
                  value={email}
                  onChangeText={(text: string) => setEmail(text)}
                />
                <Input
                  placeholder="Passwordf"
                  placeholderTextColor="grey"
                  secureTextEntry
                  value={password}
                  onChangeText={(text: string) => setPassword(text)}
                />
                <SubmitForm onPress={handleOnPress} disabled={loading}>
                  <ButtonText>{loading ? 'Loading...' : 'Sign In'}</ButtonText>
                </SubmitForm>
                <NewToMovieAppTextWrapper
                  activeOpacity={0.5}
                  onPress={() => Alert.alert('under construction')}>
                  <NewToMovieApp>New to Movie App ? Sign Up</NewToMovieApp>
                </NewToMovieAppTextWrapper>
              </Form>
            </FormWrapper>
          </Overlay>
        </ImageBackground>
      </Container>
    </>
  ) : (
    <TabBar />
  );
};

export default Login;
