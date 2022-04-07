import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {config} from '../../../config';
import {logout} from '../../store/actions/authenticationAction';

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

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
  color: white;
`;
const InfoText = styled.Text`
  font-size: 20px;
  color: white;
  margin: 2px;
  text-align: center;
`;

const Overlay = styled.View`
  flex: 1;
  justifycontent: center;
  alignitems: center;
  background-color: 'rgba(0,0,0,0.5)';
`;

const LogOut = () => {
  const dispatch = useDispatch();
  const handleOnPress = () => {
    //Alert.alert('under construction');
    dispatch(logout());
  };
  return (
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
                <InfoText>Carolina Ruiz</InfoText>
                <InfoText>cruiz@dichter-neira.com </InfoText>
                <InfoText>Software Developer</InfoText>
                <SubmitForm onPress={handleOnPress}>
                  <ButtonText>{'Log Out'}</ButtonText>
                </SubmitForm>
              </Form>
            </FormWrapper>
          </Overlay>
        </ImageBackground>
      </Container>
    </>
  );
};

export default LogOut;
